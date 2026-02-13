# CSV Validation Automation - Requirements

## Overview

Implement automated CSV validation to ensure data quality and consistency in the interview questions repository. This will help catch formatting errors, invalid data, and duplicates before they are merged.

## User Stories

### 1. As a contributor, I want immediate feedback on CSV formatting errors
So that I can fix issues before submitting my PR.

**Acceptance Criteria:**
- 1.1 Validation runs automatically on PR creation
- 1.2 Clear error messages indicate what's wrong and where
- 1.3 Validation completes within 30 seconds
- 1.4 Results are posted as PR comments

### 2. As a maintainer, I want to ensure all CSV entries have required fields
So that the data remains consistent and usable.

**Acceptance Criteria:**
- 2.1 Verify exactly 7 columns per row
- 2.2 Check that no fields are empty
- 2.3 Validate year format (YYYY, 2020-2026 range)
- 2.4 Verify contributor has @ prefix
- 2.5 Check experience level matches standard formats

### 3. As a maintainer, I want to validate topic categories
So that questions are properly categorized.

**Acceptance Criteria:**
- 3.1 Topic must be from approved list
- 3.2 Case-sensitive matching
- 3.3 Suggest closest match for invalid topics
- 3.4 Report all invalid topics in one pass

### 4. As a maintainer, I want to detect duplicate questions
So that the database remains unique and valuable.

**Acceptance Criteria:**
- 4.1 Compare question text (case-insensitive)
- 4.2 Ignore minor whitespace differences
- 4.3 Report line numbers of duplicates
- 4.4 Check against entire CSV file

### 5. As a contributor, I want validation to check CSV syntax
So that the file remains parseable.

**Acceptance Criteria:**
- 5.1 Detect unclosed quotes
- 5.2 Detect incorrect comma escaping
- 5.3 Verify UTF-8 encoding
- 5.4 Check for line ending consistency (LF)

## Constraints

- Must work with GitHub Actions (free tier)
- Should not require external dependencies beyond standard tools
- Must handle files up to 10MB
- Should be maintainable by community contributors

## Success Metrics

- 95% of PRs pass validation on first attempt (after feature launch)
- Zero invalid entries merged to main branch
- Average validation time < 30 seconds
- Contributor satisfaction with error messages

## Out of Scope

- Validation of question content quality (subjective)
- Spell checking or grammar validation
- Company name standardization (too many variations)
- Automated fixing of errors (manual fixes only)
