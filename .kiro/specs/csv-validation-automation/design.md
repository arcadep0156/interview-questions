# CSV Validation Automation - Design

## Architecture Overview

The validation system will be implemented as a Python script executed via GitHub Actions. It will parse the CSV file, run multiple validation checks, and report results as PR comments.

## Components

### 1. Validation Script (`scripts/validate_csv.py`)

**Purpose:** Core validation logic

**Key Functions:**
- `parse_csv(file_path)` - Parse CSV with error handling
- `validate_structure(rows)` - Check column count and required fields
- `validate_formats(rows)` - Verify data format compliance
- `validate_topics(rows)` - Check against approved topic list
- `detect_duplicates(rows)` - Find duplicate questions
- `generate_report(errors)` - Format validation results

### 2. GitHub Actions Workflow (`.github/workflows/validate-csv.yml`)

**Triggers:**
- Pull request opened
- Pull request synchronized (new commits)
- Manual workflow dispatch

**Steps:**
1. Checkout repository
2. Set up Python environment
3. Run validation script
4. Post results as PR comment
5. Fail workflow if errors found

### 3. Configuration File (`scripts/validation_config.json`)

**Contents:**
- Approved topics list
- Valid experience level formats
- Year range constraints
- Custom validation rules

## Data Flow

```
PR Created/Updated
    ↓
GitHub Actions Triggered
    ↓
Checkout Code
    ↓
Run validate_csv.py
    ↓
Parse CSV File
    ↓
Run Validation Checks
    ↓
Generate Report
    ↓
Post PR Comment
    ↓
Set Workflow Status (pass/fail)
```

## Validation Rules

### Structure Validation
- **Column Count:** Exactly 7 columns per row
- **Empty Fields:** No empty values allowed
- **Header Row:** Must match expected schema

### Format Validation
- **Year:** 4-digit integer, range 2020-2026
- **Contributor:** Must start with @
- **Experience:** Must match: `0-1 years`, `1-2 years`, `2-3 years`, `3-5 years`, `5+ years`
- **Topic:** Must be from approved list (case-sensitive)

### Content Validation
- **Duplicates:** Case-insensitive question text comparison
- **CSV Syntax:** Proper quote escaping, no unclosed quotes
- **Encoding:** UTF-8 only
- **Line Endings:** LF (Unix style)

## Error Reporting Format

```markdown
## CSV Validation Results

❌ **Validation Failed** - 3 errors found

### Structure Errors
- Line 15: Expected 7 columns, found 6
- Line 23: Empty field in column 'topic'

### Format Errors
- Line 18: Invalid year '20024' (must be YYYY format, 2020-2026)
- Line 31: Contributor '@john doe' contains spaces (use @johndoe)

### Topic Errors
- Line 12: Invalid topic 'K8s' (did you mean 'Kubernetes'?)

### Duplicate Questions
- Lines 45 and 67: Duplicate question detected

---
Please fix these errors and push your changes.
```

## Implementation Details

### Python Script Structure

```python
#!/usr/bin/env python3
import csv
import sys
import json
from typing import List, Dict, Tuple

class CSVValidator:
    def __init__(self, config_path: str):
        self.config = self.load_config(config_path)
        self.errors = []
    
    def validate(self, csv_path: str) -> bool:
        rows = self.parse_csv(csv_path)
        self.validate_structure(rows)
        self.validate_formats(rows)
        self.validate_topics(rows)
        self.detect_duplicates(rows)
        return len(self.errors) == 0
    
    def generate_report(self) -> str:
        # Format errors as markdown
        pass
```

### Configuration Schema

```json
{
  "approved_topics": [
    "Docker",
    "Kubernetes",
    "Shell Scripting",
    "CI/CD",
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Ansible",
    "Jenkins",
    "Git",
    "Linux",
    "Networking",
    "Monitoring",
    "Security"
  ],
  "experience_levels": [
    "0-1 years",
    "1-2 years",
    "2-3 years",
    "3-5 years",
    "5+ years"
  ],
  "year_range": {
    "min": 2020,
    "max": 2026
  },
  "required_columns": [
    "company",
    "year",
    "contributor",
    "role",
    "experience",
    "topic",
    "question"
  ]
}
```

### GitHub Actions Workflow

```yaml
name: Validate CSV

on:
  pull_request:
    paths:
      - 'devops/interview-questions.csv'
  workflow_dispatch:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
      
      - name: Run CSV Validation
        id: validate
        run: |
          python scripts/validate_csv.py devops/interview-questions.csv
        continue-on-error: true
      
      - name: Comment PR
        uses: actions/github-script@v7
        if: github.event_name == 'pull_request'
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('validation_report.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: report
            });
      
      - name: Fail if validation failed
        if: steps.validate.outcome == 'failure'
        run: exit 1
```

## Error Handling

- **File Not Found:** Clear message with expected path
- **Parse Errors:** Report line number and specific issue
- **Encoding Issues:** Suggest UTF-8 conversion
- **Large Files:** Stream processing for files > 5MB

## Testing Strategy

### Unit Tests
- Test each validation function independently
- Mock CSV data for edge cases
- Verify error message formatting

### Integration Tests
- Test complete validation workflow
- Use sample CSV files with known errors
- Verify GitHub Actions integration

### Edge Cases
- Empty CSV file
- CSV with only header row
- Malformed CSV (unclosed quotes)
- Very long questions (>1000 chars)
- Special characters in questions

## Performance Considerations

- Stream processing for large files
- Early exit on critical errors
- Batch validation checks
- Cache approved topics list

## Security Considerations

- No execution of CSV content
- Sanitize error messages for PR comments
- Limit file size to prevent DoS
- Validate file path to prevent directory traversal

## Correctness Properties

**Property 1.1: Column Count Invariant**
- For all valid CSV rows, column count must equal 7
- Validates: Requirements 2.1

**Property 1.2: Required Fields Non-Empty**
- For all valid CSV rows, no field can be empty string
- Validates: Requirements 2.2

**Property 2.1: Year Format Validity**
- For all valid CSV rows, year must be 4-digit integer in range [2020, 2026]
- Validates: Requirements 2.3

**Property 2.2: Contributor Format**
- For all valid CSV rows, contributor must match pattern `^@[a-zA-Z0-9_-]+$`
- Validates: Requirements 2.4

**Property 2.3: Experience Level Validity**
- For all valid CSV rows, experience must be in approved set
- Validates: Requirements 2.5

**Property 3.1: Topic Validity**
- For all valid CSV rows, topic must be in approved topics list
- Validates: Requirements 3.1, 3.2

**Property 4.1: Question Uniqueness**
- For all pairs of valid CSV rows, normalized question text must be unique
- Validates: Requirements 4.1, 4.2

**Property 5.1: CSV Syntax Validity**
- CSV file must be parseable by standard CSV parser
- Validates: Requirements 5.1, 5.2

## Future Enhancements

- Fuzzy matching for company names
- Automatic topic suggestion using ML
- Question quality scoring
- Integration with community website API
- Validation statistics dashboard
