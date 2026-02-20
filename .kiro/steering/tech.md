# Tech Stack

## Data Format

- **CSV** - Primary data storage format
- **UTF-8** encoding for all text files
- **Git** for version control and collaboration

## Repository Structure

```
interview-questions/
├── devops/
│   └── interview-questions.csv    # Main data file
├── docs/
│   └── GITHUB_ACTIONS_SETUP.md   # CI/CD documentation
├── .github/
│   └── workflows/                 # GitHub Actions workflows
├── CONTRIBUTING.md                # Contribution guidelines
├── README.md                      # Project overview
└── LICENSE                        # MIT License
```

## CSV Format Specifications

### Required Columns (7 total)
1. `company` - String, official company name
2. `year` - Integer, YYYY format
3. `contributor` - String, @username format
4. `role` - String, job title
5. `experience` - String, standardized ranges
6. `topic` - String, from approved topic list
7. `question` - String, quoted if contains commas

### Formatting Rules
- Use double quotes for fields containing commas
- Escape internal quotes with double quotes (`""`)
- Single-line entries (no line breaks within questions)
- UTF-8 encoding
- Unix line endings (LF)

## Standardized Topics

**DevOps & Infrastructure:**
- Docker
- Kubernetes
- Shell Scripting
- CI/CD
- Terraform
- Ansible
- Jenkins
- Git
- Linux

**Cloud Platforms:**
- AWS
- Azure
- GCP

**Operations:**
- Networking
- Monitoring
- Security

## Experience Level Standards

Use only these formats:
- `0-1 years`
- `1-2 years`
- `2-3 years`
- `3-5 years`
- `5+ years`

## GitHub Workflow

### Branch Naming
- `add-<company>-<topic>-questions`
- `update-<topic>-questions`
- `fix-<issue-description>`

### Commit Message Format
- `Add: <description>`
- `Update: <description>`
- `Fix: <description>`

### PR Title Format
```
Add: [Company] [Topic] interview questions
```

## Validation

- JSON schema validation via GitHub Actions
- Duplicate ID detection
- Topic validation against approved list
- Automated index and contributor generation
- Duplicate detection

## Common Commands

```bash
# Clone repository
git clone https://github.com/Nandan29300/interview-questions.git

# Create feature branch
git checkout -b add-interview-questions

# Add changes
git add data/2025/company.json

# Commit with proper format
git commit -m "Add: Amazon Docker interview questions"

# Push to fork
git push origin add-interview-questions
```

## Quality Standards

- Real questions from actual interviews
- Clear, grammatically correct English
- Proper JSON formatting with all required fields
- No duplicate entries
- Accurate company names and years
- Valid topic categories
