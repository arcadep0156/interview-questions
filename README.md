# 🎯 TrainWithShubham Interview Questions

**Community-driven collection of real DevOps, Cloud, and DevSecOps interview questions**

[![CSV Data](https://img.shields.io/badge/Format-CSV-green?style=for-the-badge)](devops/interview-questions.csv)
[![Community](https://img.shields.io/badge/Community-Driven-blue?style=for-the-badge)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

*Help thousands of engineers prepare for technical interviews by sharing real questions you've encountered.*

[📝 Contribute](#-how-to-contribute) • [📊 Data Format](#-data-format) • [🤝 Guidelines](#-contribution-guidelines) • [🌐 Website](https://community.trainwithshubham.com/interview-questions)

---

## 📖 About

This repository serves as a centralized knowledge base where community members contribute actual interview questions they've encountered in DevOps, Cloud, and DevSecOps roles. All questions are stored in CSV format and automatically displayed on the [TrainWithShubham Community Website](https://community.trainwithshubham.com/interview-questions).

### Why This Matters

- ✅ **Real Questions** - From actual interviews, not generic online content
- ✅ **Community Verified** - Reviewed and validated by maintainers
- ✅ **Always Updated** - Recent questions from 2023 onwards
- ✅ **Searchable** - Filterable by company, topic, experience level
- ✅ **Free Access** - Open to everyone preparing for interviews

---

## 📊 Data Format

### CSV Structure

All questions are stored in `devops/interview-questions.csv` with 7 required columns:

```csv
company,year,contributor,role,experience,topic,question
```

### Example Entry

```csv
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Docker,"Explain the difference between Docker CMD and ENTRYPOINT. When would you use one over the other?"
```

### Field Specifications

| Column | Format | Example | Rules |
|--------|--------|---------|-------|
| **company** | Company Name | Amazon, Google, Microsoft | Official company name |
| **year** | YYYY | 2024, 2023 | Year of interview |
| **contributor** | @username | @johndoe | Your GitHub username with @ |
| **role** | Job Title | DevOps Engineer, SRE | Exact role title |
| **experience** | Range | 3-5 years, 5+ years | Standard ranges only |
| **topic** | Category | Docker, Kubernetes, AWS | From approved list |
| **question** | Full Question | "Explain..." | Quoted if contains commas |

---

## 🚀 How to Contribute

### Quick Start

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create a branch**: `git checkout -b add-company-topic-questions`
4. **Edit** `devops/interview-questions.csv`
5. **Add your questions** following the format
6. **Commit**: `git commit -m "Add: Company Topic interview questions"`
7. **Push**: `git push origin add-company-topic-questions`
8. **Create Pull Request**

### Detailed Guide

See [CONTRIBUTING.md](CONTRIBUTING.md) for comprehensive guidelines including:
- CSV formatting rules
- Topic categories
- Quality standards
- PR process
- Validation checklist

---

## 📋 Contribution Guidelines

### ✅ DO Add

- Real questions from actual interviews
- Questions from recent interviews (2023+)
- Clear, well-formatted questions
- Questions with proper context
- Questions from any company (startups to FAANG)

### ❌ DON'T Add

- Duplicate questions
- Generic questions from Google/ChatGPT
- Questions without attribution
- Inappropriate content
- Questions violating NDAs

---

## 🏷️ Standardized Topics

Use **ONLY** these approved topics:

**DevOps & Infrastructure:**
Docker, Kubernetes, Shell Scripting, CI/CD, Terraform, Ansible, Jenkins, Git, Linux

**Cloud Platforms:**
AWS, Azure, GCP

**Operations:**
Networking, Monitoring, Security

---

## 📏 Experience Levels

Use **ONLY** these standard formats:
- `0-1 years`
- `1-2 years`
- `2-3 years`
- `3-5 years`
- `5+ years`

---

## 🔄 Integration with Community Website

Questions added to this repository automatically appear on the [TrainWithShubham Community Website](https://community.trainwithshubham.com/interview-questions):

```
CSV Updated → PR Merged → Website Rebuild → Questions Live
```

The website provides:
- 🔍 Fuzzy search across all questions
- 🎯 Advanced filtering (company, year, role, experience, topic)
- 📊 CSV export functionality
- 🔄 Real-time updates from this repository

---

## 📚 Resources

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Detailed contribution guide
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick reference for common tasks
- **[docs/GITHUB_ACTIONS_SETUP.md](docs/GITHUB_ACTIONS_SETUP.md)** - CI/CD documentation
- **[Community Website](https://community.trainwithshubham.com/interview-questions)** - View all questions

---

## 🎯 Current Stats

- **Questions**: Growing collection from real interviews
- **Companies**: Amazon, Google, Microsoft, and more
- **Topics**: 15+ DevOps, Cloud, and Security categories
- **Contributors**: Community-driven contributions

---

## 🤝 Community

### Recognition

All contributors are:
- Listed in repository contributors
- Credited in their CSV entries
- Acknowledged on the community website

### Getting Help

- 📖 Check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
- 🐛 Report issues via [GitHub Issues](https://github.com/Nandan29300/interview-questions/issues)
- 💬 Ask questions in Pull Requests
- 🏷️ Look for `good first issue` labels

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**[⬆ Back to Top](#-trainwithshubham-interview-questions)**

Made with 💻 and ☕ by the TrainWithShubham Community

[![GitHub Stars](https://img.shields.io/github/stars/Nandan29300/interview-questions?style=social)](https://github.com/Nandan29300/interview-questions)
[![GitHub Forks](https://img.shields.io/github/forks/Nandan29300/interview-questions?style=social)](https://github.com/Nandan29300/interview-questions/fork)

</div>
