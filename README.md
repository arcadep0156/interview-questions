# TrainWithShubham Interview Questions

Community-contributed interview questions for DevOps, Cloud, and DevSecOps, powering the [TWS Community Hub](https://community.trainwithshubham.com/interview-questions).

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [CSV Formatting Rules](#csv-formatting-rules)
- [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Links & Documentation](#links--documentation)

---

## Project Overview

This repository collects real interview questions faced by DevOps, Cloud, and DevSecOps professionals. Questions are stored in CSV files and automatically published to the community website for students and practitioners to prepare for interviews.

## Features

- Real-world interview questions, categorized by company, year, role, experience, and topic
- Community-driven: anyone can contribute via Pull Requests
- Automated deployment: new questions appear on the website within minutes after PR merge
- CSV-based data for easy editing and version control

## Repository Structure

```
interview-questions/
├── devops/
│   └── interview-questions.csv   # Main CSV file for DevOps questions
├── docs/
│   └── GITHUB_ACTIONS_SETUP.md   # Auto-deploy workflow documentation
├── CONTRIBUTING.md               # Contribution guide
├── LICENSE                       # MIT License
└── README.md                     # This file
```

## How It Works

1. Add questions to the CSV file (e.g., `devops/interview-questions.csv`)
2. Create a Pull Request
3. GitHub Actions trigger a webhook to rebuild the [community website](https://community.trainwithshubham.com/interview-questions)
4. New questions are live within 3-5 minutes

See [docs/GITHUB_ACTIONS_SETUP.md](docs/GITHUB_ACTIONS_SETUP.md) for workflow details.

## Contributing

We welcome contributions from everyone! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.

### Quick Start

1. Fork the repository
2. Clone your fork
3. Create a new branch
4. Add your questions to the CSV file
5. Commit and push your changes
6. Create a Pull Request

### Guidelines

- Add only real questions you faced in interviews
- Use clear, well-formatted English
- Include your GitHub username as contributor
- Avoid duplicates and generic questions

## CSV Formatting Rules

- Columns: `company, year, contributor, role, experience, topic, question`
- Wrap questions containing commas in double quotes
- Avoid line breaks and special characters in questions
- Use standardized topics (see CONTRIBUTING.md for list)

**Example:**
```csv
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Docker,"Explain the difference between Docker CMD and ENTRYPOINT. When would you use one over the other?"
```

## Pull Request Process

- Use descriptive PR titles (e.g., `Add: Amazon Docker interview questions`)
- Fill in the PR template with details
- Automated checks validate CSV formatting
- Maintainers review and merge PRs within 48-72 hours

## Code of Conduct

- Be respectful and helpful
- Only add genuine questions
- No confidential or inappropriate content

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

## License

MIT License. By contributing, you agree your submissions are licensed under MIT.

## Links & Documentation

- [Community Website](https://community.trainwithshubham.com/interview-questions)
- [Contribution Guide](CONTRIBUTING.md)
- [GitHub Actions Setup](docs/GITHUB_ACTIONS_SETUP.md)

---

**Thank you for contributing and helping the community!**
