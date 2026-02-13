# Project Structure

## Repository Organization

```
interview-questions/
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── .kiro/
│   ├── specs/              # Feature specifications
│   └── steering/           # Project guidelines
├── devops/
│   └── interview-questions.csv  # Main data file
├── docs/
│   └── GITHUB_ACTIONS_SETUP.md
├── CONTRIBUTING.md         # Contribution guide
├── README.md              # Project overview
└── LICENSE                # MIT License
```

## Core Files

### Data Files

- `devops/interview-questions.csv` - Primary data store
  - Contains all interview questions
  - 7 required columns per entry
  - CSV format with proper escaping

### Documentation

- `README.md` - Project introduction and quick start
- `CONTRIBUTING.md` - Detailed contribution guidelines
  - Fork and clone instructions
  - CSV formatting rules
  - PR process and templates
  - Quality standards
- `docs/GITHUB_ACTIONS_SETUP.md` - CI/CD configuration

### GitHub Integration

- `.github/workflows/` - Automated validation workflows
  - CSV syntax validation
  - Format compliance checks
  - PR automation

## Data Organization

### Current Structure
- Single CSV file: `devops/interview-questions.csv`
- All questions in one file for simplicity
- Filterable by topic, company, year, experience level

### Future Expansion (if needed)
```
devops/
├── interview-questions.csv      # Main file
├── docker/                      # Topic-specific (optional)
├── kubernetes/                  # Topic-specific (optional)
└── cloud/                       # Topic-specific (optional)
```

## CSV Schema

```csv
company,year,contributor,role,experience,topic,question
```

### Field Specifications

| Field | Type | Format | Example |
|-------|------|--------|---------|
| company | String | Official name | Amazon, Google, Microsoft |
| year | Integer | YYYY | 2024, 2023 |
| contributor | String | @username | @johndoe |
| role | String | Job title | DevOps Engineer, SRE |
| experience | String | Standard range | 3-5 years, 5+ years |
| topic | String | Approved topic | Docker, Kubernetes, AWS |
| question | String | Quoted text | "Explain Docker networking..." |

## Contribution Workflow

### File Modification Pattern
1. Fork repository
2. Clone fork locally
3. Create feature branch
4. Edit `devops/interview-questions.csv`
5. Add new rows with proper formatting
6. Commit with conventional format
7. Push to fork
8. Create Pull Request

### Quality Gates
- Automated CSV validation
- Manual review by maintainers
- Format compliance verification
- Duplicate detection

## Conventions

### File Naming
- Use lowercase with hyphens: `interview-questions.csv`
- Documentation: `UPPERCASE.md` for root-level docs
- Guides: `lowercase-with-hyphens.md` for subdirectories

### CSV Formatting
- Always quote fields containing commas
- Use double quotes to escape quotes: `"What is ""IaC""?"`
- No line breaks within questions
- UTF-8 encoding
- Unix line endings (LF)

### Git Workflow
- Branch names: `add-<company>-<topic>-questions`
- Commit messages: `Add: <description>`
- PR titles: `Add: [Company] [Topic] interview questions`

## Validation Rules

### Required Checks
- 7 columns per row
- Valid year format (YYYY)
- Contributor has @ prefix
- Experience matches standard ranges
- Topic from approved list
- No duplicate questions

### Data Quality
- Real interview questions only
- Clear, grammatically correct
- Proper context when needed
- Accurate company names
- Recent questions preferred (2023+)

## Integration Points

### GitHub Actions
- Runs on PR creation
- Validates CSV syntax
- Checks column count
- Reports errors in PR comments

### Community Website
- CSV data consumed by TrainWithShubham community website
- Questions displayed in searchable interface
- Filtered by topic, company, experience level
