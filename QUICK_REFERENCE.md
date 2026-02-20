# Quick Reference Guide

Quick reference for working with the interview-questions repository.

## Repository Purpose

Community-driven collection of real DevOps, Cloud, and DevSecOps interview questions in JSON format.

## File Structure

```
interview-questions/
├── .github/workflows/     # GitHub Actions (validation, auto-deploy)
├── .kiro/                 # Kiro configuration
│   ├── specs/            # Feature specifications
│   └── steering/         # Project guidelines
├── data/
│   ├── 2023/             # Questions from 2023
│   ├── 2024/             # Questions from 2024
│   └── 2025/             # Questions from 2025
│       └── openai.json   # Company-specific files
├── meta/
│   ├── schema.json       # JSON Schema for validation
│   ├── topics.json       # Allowed topics
│   └── companies.json    # Company metadata
├── scripts/
│   ├── generate-contributors.js  # Auto-generate contributors
│   ├── generate-index.js         # Auto-generate master index
│   └── update-readme-contributors.js  # Update README contributors
├── index.json            # Master index (auto-generated)
├── contributors.json     # Contributors list (auto-generated)
├── docs/                 # Documentation
└── CONTRIBUTING.md       # Contribution guide
```

## JSON Format

### Required Fields
```json
{
  "id": "company-year-XXX",
  "company": "Amazon",
  "year": 2024,
  "role": "DevOps Engineer",
  "experience": "3-5 years",
  "topic": "Docker",
  "question": "Your interview question here?",
  "difficulty": "medium",
  "contributor": {
    "name": "Your Full Name",
    "github": "@your-github-username",
    "linkedin": "https://linkedin.com/in/your-profile"
  },
  "contributedAt": "2025-02-20",
  "tags": ["docker", "containers"]
}
```

### Formatting Rules
- Valid JSON syntax (proper commas, brackets)
- Unique IDs (company-year-number format)
- Year as number, not string
- Contributor object with name, github, and optional linkedin
- Tags array for searchability

## Standardized Values

### Topics (case-sensitive)
Docker, Kubernetes, Shell Scripting, CI/CD, AWS, Azure, GCP, Terraform, Ansible, Jenkins, Git, Linux, Networking, Monitoring, Security, Legacy Systems, Python

### Experience Levels
`Fresher`, `0-2 years`, `3-5 years`, `5+ years`

### Difficulty Levels
`easy`, `medium`, `hard`

### Year Format
YYYY as number (e.g., 2024, 2023)

### Contributor Format
Object with name, github (@username), and optional linkedin URL

## Common Workflows

### Adding Questions

1. Fork the repository
2. Clone your fork
3. Create a branch: `git checkout -b add-company-topic-questions`
4. Edit appropriate JSON file in `data/YYYY/company.json`
5. Add your questions following the JSON format
6. Commit: `git commit -m "Add: Company Topic interview questions"`
7. Push: `git push origin add-company-topic-questions`
8. Create Pull Request
9. Automated validation runs (schema, duplicates, topics)
10. Once merged, index.json and contributors.json auto-update

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
- JSON data consumed by community website at https://arcadep0156.github.io/community-website/
- Changes trigger automatic website rebuild
- Questions displayed in searchable interface
- Filterable by topic, company, experience level, difficulty

### GitHub Actions
- `validate.yml` - Validates JSON schema and data quality
- `auto-generate-index.yml` - Auto-generates index.json and contributors.json
- `trigger-deploy.yml` - Triggers website rebuild on data changes
- All run automatically on push to main branch

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

### JSON Syntax Errors
- Check for missing commas between fields
- Verify all brackets and braces are closed
- Ensure proper quote escaping
- Use a JSON validator before committing

### Invalid Format
- Year must be number, not string
- ID must be unique across all questions
- Experience must match standard formats
- Topic must be from approved list in meta/topics.json
- Contributor must have name and github fields

### Duplicates
- Automated validation checks for duplicate IDs
- Search existing questions before adding
- Use unique ID format: company-year-number

## Resources

- **CONTRIBUTING.md** - Detailed contribution guidelines
- **docs/GITHUB_ACTIONS_SETUP.md** - CI/CD documentation
- **.kiro/README.md** - Kiro directory overview
- **.kiro/specs/** - Feature specifications and examples

## Quick Commands

```bash
# Clone repository
git clone https://github.com/arcadep0156/interview-questions.git

# Create feature branch
git checkout -b add-interview-questions

# View questions
cat data/2025/openai.json

# Validate JSON syntax
node -e "JSON.parse(require('fs').readFileSync('data/2025/openai.json'))"

# Add and commit
git add data/2025/openai.json
git commit -m "Add: OpenAI Docker interview questions"

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
