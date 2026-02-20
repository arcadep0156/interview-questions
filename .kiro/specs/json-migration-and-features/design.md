# JSON Migration and Feature Enhancements - Design

## Architecture Overview

The repository uses JSON files organized by year and company, with automated validation and generation workflows via GitHub Actions.

## Data Structure

### File Organization
```
data/
├── 2023/
│   ├── ibm.json
│   └── microsoft.json
├── 2024/
│   ├── amazon.json
│   ├── cloudflare.json
│   └── google.json
└── 2025/
    └── openai.json
```

### JSON Schema
```json
{
  "company": "Amazon",
  "year": 2025,
  "questions": [
    {
      "id": "amazon-2025-001",
      "company": "Amazon",
      "year": 2025,
      "role": "DevOps Engineer",
      "experience": "3-5 years",
      "topic": "Docker",
      "question": "Question text",
      "difficulty": "medium",
      "contributor": {
        "name": "Full Name",
        "github": "@username",
        "linkedin": "https://linkedin.com/in/profile"
      },
      "contributedAt": "2025-02-20",
      "tags": ["docker", "containers"]
    }
  ]
}
```

## Components

### 1. JSON Schema Validation (`meta/schema.json`)
- Validates all required fields
- Enforces data types
- Validates enums (experience, difficulty)
- Ensures contributor object structure

### 2. Topics Management (`meta/topics.json`)
- Centralized list of approved topics
- 27 topics covering DevOps/Cloud stack
- Organized by category
- Easy to extend

### 3. Index Generation (`scripts/generate-index.js`)
- Scans all data files
- Generates master index with metadata
- Outputs to `index.json`
- Runs automatically on data changes

### 4. Contributors Generation (`scripts/generate-contributors.js`)
- Extracts contributor info from all questions
- Counts contributions per contributor
- Includes LinkedIn URLs
- Sorts by contribution count
- Outputs to `contributors.json`

### 5. README Update (`scripts/update-readme-contributors.js`)
- Updates top 5 contributors section
- Maintains markdown formatting
- Preserves other README content

## GitHub Actions Workflows

### Workflow 1: Validation (`validate.yml`)
**Trigger**: PR and push to main
**Steps**:
1. Checkout code
2. Setup Node.js
3. Install ajv-cli
4. Validate all JSON files against schema
5. Check for duplicate IDs
6. Validate index.json structure
7. Report results

### Workflow 2: Auto-Generate (`auto-generate-index.yml`)
**Trigger**: Push to any branch (data changes)
**Steps**:
1. Checkout code
2. Setup Node.js
3. Run generate-index.js
4. Run generate-contributors.js
5. Run update-readme-contributors.js
6. Check for changes
7. Commit and push if changed

### Workflow 3: Trigger Deploy (`trigger-deploy.yml`)
**Trigger**: Push to main (data or index changes)
**Steps**:
1. Send repository_dispatch webhook
2. Target: arcadep0156/community-website
3. Event type: interview-questions-updated
4. Payload: ref and sha

## Data Flow

```
1. Contributor adds question
   ↓
2. Creates PR
   ↓
3. Validation workflow runs
   ↓
4. PR merged to main
   ↓
5. Auto-generate workflow runs
   ↓
6. index.json and contributors.json updated
   ↓
7. Changes auto-committed
   ↓
8. Trigger workflow runs
   ↓
9. Website rebuilds
   ↓
10. New questions appear (3 minutes)
```

## Experience Levels

- **Fresher**: Entry-level, no experience required
- **0-2 years**: Junior level
- **3-5 years**: Mid-level
- **5+ years**: Senior level

## Topics (27 total)

**DevOps & Infrastructure:**
Ansible, CI/CD, Docker, GitLab CI, Helm, Jenkins, Kubernetes, Shell Scripting, Terraform, Vault

**Cloud Platforms:**
AWS, Azure, CloudFormation, GCP

**Monitoring:**
ELK Stack, Grafana, Monitoring, Prometheus

**Core Skills:**
Automation, Git, Infrastructure, Legacy Systems, Linux, Networking, Python, Security

**Other:**
CDN

## Contributor Recognition

### Contributors.json Format
```json
{
  "version": "v1",
  "lastUpdated": "2026-02-20T15:41:37.311Z",
  "totalContributors": 15,
  "contributors": [
    {
      "name": "Contributor Name",
      "github": "@username",
      "linkedin": "https://linkedin.com/in/profile",
      "count": 5
    }
  ]
}
```

### LinkedIn Integration
- Optional field in contributor object
- Validated as URI format
- Displayed with pipe separator on website
- Enables professional networking

## Migration Strategy

### Phase 1: Structure Setup ✅
- Create data/ directory structure
- Create meta/ directory with schema and topics
- Create scripts/ directory

### Phase 2: Data Migration ✅
- Convert CSV to JSON format
- Organize by year and company
- Add contributor objects with LinkedIn

### Phase 3: Automation ✅
- Implement validation workflow
- Implement auto-generate workflow
- Implement trigger workflow

### Phase 4: Documentation ✅
- Update README.md
- Rewrite CONTRIBUTING.md
- Update QUICK_REFERENCE.md
- Update GITHUB_ACTIONS_SETUP.md

### Phase 5: Integration ✅
- Connect to community website
- Test auto-rebuild
- Verify LinkedIn display

## Benefits

### For Contributors
- Structured data format
- LinkedIn recognition
- Automatic validation
- Clear guidelines

### For Users
- Better search and filtering
- Contributor profiles
- Fresh content
- Professional networking

### For Maintainers
- Automated workflows
- Less manual work
- Better data quality
- Scalable structure
