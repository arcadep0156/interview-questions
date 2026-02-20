# Tech Stack

## Data Format

- **JSON** - Primary data storage format organized by year and company
- **UTF-8** encoding for all text files
- **Git** for version control and collaboration
- **JSON Schema** for validation

## Repository Structure

```
interview-questions/
├── data/
│   ├── 2023/
│   │   ├── ibm.json
│   │   └── microsoft.json
│   ├── 2024/
│   │   ├── amazon.json
│   │   ├── cloudflare.json
│   │   └── google.json
│   └── 2025/
│       └── openai.json
├── meta/
│   ├── schema.json         # JSON Schema for validation
│   ├── topics.json         # Allowed topics list
│   └── companies.json      # Company metadata
├── scripts/
│   ├── generate-index.js
│   ├── generate-contributors.js
│   └── update-readme-contributors.js
├── .github/
│   └── workflows/
│       ├── validate.yml
│       ├── auto-generate-index.yml
│       └── trigger-deploy.yml
├── index.json              # Auto-generated master index
├── contributors.json       # Auto-generated contributors
├── docs/
│   └── GITHUB_ACTIONS_SETUP.md
├── CONTRIBUTING.md
├── README.md
└── LICENSE
```

## JSON Format Specifications

### Required Fields
```json
{
  "id": "company-year-number",
  "company": "Amazon",
  "year": 2025,
  "role": "DevOps Engineer",
  "experience": "3-5 years",
  "topic": "Docker",
  "question": "Question text here",
  "difficulty": "medium",
  "contributor": {
    "name": "Full Name",
    "github": "@username",
    "linkedin": "https://linkedin.com/in/profile"
  },
  "contributedAt": "2025-02-20",
  "tags": ["docker", "containers"]
}
```

### Formatting Rules
- Valid JSON syntax with proper commas and brackets
- Unique IDs in format: `company-year-number`
- Year as number, not string
- Contributor object with name, github (required), linkedin (optional)
- Tags array for searchability

## Standardized Topics (27 total)

**DevOps & Infrastructure:**
- Ansible, CI/CD, Docker, GitLab CI, Helm, Jenkins, Kubernetes, Shell Scripting, Terraform, Vault

**Cloud Platforms:**
- AWS, Azure, CloudFormation, GCP

**Monitoring & Observability:**
- ELK Stack, Grafana, Monitoring, Prometheus

**Core Skills:**
- Automation, Git, Infrastructure, Legacy Systems, Linux, Networking, Python, Security

**Other:**
- CDN

## Experience Level Standards

Use only these formats:
- `Fresher` - Entry level
- `0-2 years` - Junior
- `3-5 years` - Mid-level
- `5+ years` - Senior

## Difficulty Levels

- `easy`
- `medium`
- `hard`

## GitHub Workflow

### Branch Naming
- `add-<company>-<topic>-questions`
- `update-<topic>-questions`
- `fix-<issue-description>`

### Commit Message Format
- `Add: <description>`
- `Update: <description>`
- `Fix: <description>`
- `chore: <description>` (for auto-generated files)

### PR Title Format
```
Add: [Company] [Topic] interview questions
```

## Automated Workflows

### 1. Validation (`validate.yml`)
- Runs on PR and push to main
- Validates JSON schema
- Checks for duplicate IDs
- Validates topics against approved list
- Validates index.json structure

### 2. Auto-Generate Index (`auto-generate-index.yml`)
- Runs on push to any branch when data files change
- Generates `index.json` (master index)
- Generates `contributors.json` (leaderboard)
- Updates README with top contributors
- Auto-commits changes

### 3. Trigger Deploy (`trigger-deploy.yml`)
- Runs on push to main when data or index changes
- Sends webhook to community-website repo
- Triggers website rebuild
- Questions appear on site within 3 minutes

## Common Commands

```bash
# Clone repository
git clone https://github.com/arcadep0156/interview-questions.git

# Create feature branch
git checkout -b add-interview-questions

# Add changes (only data files)
git add data/2025/amazon.json

# Commit with proper format
git commit -m "Add: Amazon Docker interview questions"

# Push to fork
git push origin add-interview-questions

# Validate JSON locally (optional)
node -e "JSON.parse(require('fs').readFileSync('data/2025/amazon.json'))"
```

## Quality Standards

- Real questions from actual interviews
- Clear, grammatically correct English
- Proper JSON formatting with all required fields
- Unique IDs (no duplicates)
- Accurate company names and years
- Valid topic from approved list
- LinkedIn URLs for contributor recognition

## Integration

- **Website**: https://arcadep0156.github.io/community-website/interview-questions
- **Auto-rebuild**: Triggered on data changes
- **Contributors**: Auto-generated leaderboard with LinkedIn
- **Search & Filter**: By company, topic, experience, difficulty
