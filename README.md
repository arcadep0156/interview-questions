# Interview Questions Repository

> A community-driven collection of DevOps, Cloud, and DevSecOps interview questions from real interviews at top tech companies.

## 📊 Statistics

- **Total Questions**: 6
- **Companies**: 6 (Amazon, Google, Microsoft, IBM, OpenAI, Cloudflare)
- **Years**: 2023-2025
- **Topics**: CI/CD, Docker, Kubernetes, Networking, Legacy Systems

## 🎯 Purpose

This repository serves as a **GitHub-based database** of interview questions, consumed by the [TWS Community Hub](https://trainwithshubham.github.io/community-website/) website.

## 📁 Repository Structure

```
interview-questions/
├── index.json                 # Master index file
├── meta/
│   ├── schema.json           # JSON Schema for validation
│   ├── topics.json           # Allowed topics
│   └── companies.json        # Company metadata
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
└── .github/workflows/
    └── validate.yml          # Automated validation
```

## 🤝 How to Contribute

### Quick Start

1. **Fork this repository**
2. **Find the right file**: `data/{year}/{company}.json`
3. **Add your question** using the template below
4. **Submit a Pull Request**

### Question Template

```json
{
  "id": "company-year-XXX",
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

### Field Requirements

- **id**: Format `{company-slug}-{year}-{number}` (e.g., `amazon-2024-001`)
- **experience**: Must be `0-2 years`, `3-5 years`, or `5+ years`
- **topic**: Must exist in `meta/topics.json`
- **contributor**: Object with `name`, `github` (required), and `linkedin` (optional)
- **difficulty**: `easy`, `medium`, or `hard`

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## ✅ Validation

All Pull Requests are automatically validated for:
- Schema compliance
- Unique question IDs
- Valid topics
- Data quality

## 🔍 Topics Covered

AWS, Azure, CI/CD, Docker, GCP, Git, Jenkins, Kubernetes, Legacy Systems, Linux, Monitoring, Networking, Python, Security, Shell Scripting, Terraform

## 🏆 Top Contributors

<!-- CONTRIBUTORS_START -->
This section is auto-generated. Top contributors by question count:

1. **Test User** ([@testuser](https://github.com/testuser)) - 2 questions
2. **Mainframe Expert** ([@mainframe](https://github.com/mainframe)) - 1 questions
3. **Frank Miller** ([@frankmiller](https://github.com/frankmiller)) - 1 questions
4. **DevOps Guru** ([@devops_guru](https://github.com/devops_guru)) - 1 questions
5. **Emma Johnson** ([@emmaj](https://github.com/emmaj)) - 1 questions

[View all contributors →](contributors.json)
<!-- CONTRIBUTORS_END -->

## 📊 Browse Questions

Visit the [TWS Community Hub](https://trainwithshubham.github.io/community-website/interview-questions) to browse and filter questions.

## 📜 License

MIT License - See [LICENSE](LICENSE) for details.

---

**Maintained by**: [TrainWithShubham Community](https://github.com/TrainWithShubham)
