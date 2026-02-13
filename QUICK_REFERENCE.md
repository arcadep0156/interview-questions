# Quick Reference Guide

Quick reference for working with the interview-questions repository.

## Repository Purpose

Community-driven collection of real DevOps, Cloud, and DevSecOps interview questions in CSV format.

## File Structure

```
interview-questions/
├── .github/workflows/     # GitHub Actions (auto-deploy trigger)
├── .kiro/                 # Kiro configuration
│   ├── specs/            # Feature specifications
│   └── steering/         # Project guidelines (auto-included)
├── devops/
│   └── interview-questions.csv  # Main data file
├── docs/                 # Documentation
└── CONTRIBUTING.md       # Contribution guide
```

## CSV Format

### Required Columns (7 total)
```csv
company,year,contributor,role,experience,topic,question
```

### Example Entry
```csv
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Docker,"Explain the difference between CMD and ENTRYPOINT"
```

### Formatting Rules
- Quote fields containing commas: `"Question with, comma"`
- Escape internal quotes: `"What is ""IaC""?"`
- Single-line entries (no line breaks)
- UTF-8 encoding, Unix line endings (LF)

## Standardized Values

### Topics (case-sensitive)
Docker, Kubernetes, Shell Scripting, CI/CD, AWS, Azure, GCP, Terraform, Ansible, Jenkins, Git, Linux, Networking, Monitoring, Security

### Experience Levels
`0-1 years`, `1-2 years`, `2-3 years`, `3-5 years`, `5+ years`

### Year Format
YYYY (e.g., 2024, 2023)

### Contributor Format
@username (e.g., @johndoe)

## Common Workflows

### Adding Questions

1. Fork the repository
2. Clone your fork
3. Create a branch: `git checkout -b add-company-topic-questions`
4. Edit `devops/interview-questions.csv`
5. Add your questions following the format
6. Commit: `git commit -m "Add: Company Topic interview questions"`
7. Push: `git push origin add-company-topic-questions`
8. Create Pull Request

### Branch Naming
- `add-<company>-<topic>-questions` - Adding new questions
- `update-<topic>-questions` - Updating existing questions
- `fix-<issue-description>` - Bug fixes

### Commit Messages
- `Add: <description>` - New questions
- `Update: <description>` - Changes to existing questions
- `Fix: <description>` - Bug fixes

## Quality Guidelines

### DO Add
✓ Real questions from actual interviews
✓ Questions from recent interviews (2023+)
✓ Clear, well-formatted questions
✓ Questions with proper context
✓ Questions from any company

### DON'T Add
✗ Duplicate questions
✗ Generic questions from Google/ChatGPT
✗ Questions without attribution
✗ Inappropriate content
✗ Questions violating NDAs

## Integration

### Community Website
- CSV data is consumed by TrainWithShubham community website
- Changes to CSV trigger automatic website rebuild
- Questions displayed in searchable interface
- Filterable by topic, company, experience level

### GitHub Actions
- `trigger-deploy.yml` - Triggers website rebuild on CSV changes
- Runs automatically when changes are pushed to main branch

## Working with Kiro

### Steering Files (Auto-included)
- `product.md` - Product overview and goals
- `tech.md` - Technical standards and conventions
- `structure.md` - Project organization

### Creating Specs
```
Create a spec for [feature description]
```

### Executing Tasks
```
Execute task 1.1 from [spec-name]
Run all tasks for [spec-name]
```

## Common Issues

### CSV Parsing Errors
- Check for unclosed quotes
- Verify comma escaping in questions
- Ensure no line breaks within questions

### Invalid Format
- Year must be YYYY format
- Contributor must start with @
- Experience must match standard formats
- Topic must be from approved list

### Duplicates
- Search CSV before adding questions
- Use case-insensitive search
- Check similar questions with different wording

## Resources

- **CONTRIBUTING.md** - Detailed contribution guidelines
- **docs/GITHUB_ACTIONS_SETUP.md** - CI/CD documentation
- **.kiro/README.md** - Kiro directory overview
- **.kiro/specs/** - Feature specifications and examples

## Quick Commands

```bash
# Clone repository
git clone https://github.com/Nandan29300/interview-questions.git

# Create feature branch
git checkout -b add-interview-questions

# View CSV
cat devops/interview-questions.csv

# Search for duplicates
grep -i "your question text" devops/interview-questions.csv

# Check CSV format
file devops/interview-questions.csv  # Should show UTF-8

# Add and commit
git add devops/interview-questions.csv
git commit -m "Add: Amazon Docker interview questions"

# Push to fork
git push origin add-interview-questions
```

## Getting Help

- Open an issue on GitHub
- Check CONTRIBUTING.md for detailed guidelines
- Review existing questions for formatting examples
- Tag maintainers in your PR for questions

---

**Last Updated:** February 13, 2026
