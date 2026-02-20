# 🤝 Contributing to TrainWithShubham Interview Questions

Thank you for considering contributing to this repository! Your contributions help thousands of students and professionals prepare for their interviews.

## 📋 Table of Contents

- [How to Contribute](#how-to-contribute)
- [Contribution Guidelines](#contribution-guidelines)
- [JSON Formatting Rules](#json-formatting-rules)
- [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)

## 🚀 How to Contribute

### Step 1: Fork the Repository

1. Navigate to [https://github.com/arcadep0156/interview-questions](https://github.com/arcadep0156/interview-questions)
2. Click the **Fork** button in the top-right corner
3. This creates a copy of the repository in your GitHub account

### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/interview-questions.git
cd interview-questions
```

### Step 3: Create a New Branch

```bash
git checkout -b add-interview-questions
```

**Branch Naming Convention:**
- `add-<company>-<topic>-questions` (e.g., `add-amazon-docker-questions`)
- `update-<topic>-questions`
- `fix-<issue-description>`

### Step 4: Add Your Questions

Navigate to the appropriate folder and edit the JSON file:

```bash
cd data/2025
nano openai.json
```

Add your interview questions following the JSON format below.

### Step 5: Commit Your Changes

```bash
git add .
git commit -m "Add: Amazon Docker interview questions from 2024"
```

**Commit Message Format:**
- `Add: <brief description of questions added>`
- `Update: <brief description of changes>`
- `Fix: <brief description of fix>`

### Step 6: Push to Your Fork

```bash
git push origin add-interview-questions
```

### Step 7: Create a Pull Request

1. Go to your forked repository on GitHub
2. Click **Compare & pull request**
3. Fill in the PR template with details
4. Submit the Pull Request

## 📝 Contribution Guidelines

### What Questions to Add

✅ **DO Add:**
- Real questions you faced in actual interviews
- Questions from recent interviews (2023 onwards preferred)
- Clear and well-formatted questions
- Questions with proper context when needed
- Questions from any company (startups to FAANG)

❌ **DON'T Add:**
- Duplicate questions already in the repository
- Generic questions copied from Google/ChatGPT
- Questions without proper attribution
- Inappropriate or offensive content
- Questions that violate NDAs

### Quality Standards

- **Be Accurate**: Only add questions you personally faced or have verified
- **Be Clear**: Write questions in clear, grammatically correct English
- **Be Specific**: Include context where necessary
- **Be Respectful**: Don't share confidential company information

## 📝 JSON Formatting Rules

### Required Fields

Your JSON entry must include all these fields:

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

### Field Guidelines

| Field | Format | Examples | Rules |
|--------|--------|----------|-------|
| **id** | company-year-XXX | amazon-2024-001 | Unique identifier |
| **company** | Company Name | Amazon, Google, Microsoft | Use official company name |
| **year** | YYYY | 2024, 2023 | Use year of interview |
| **role** | Job Title | DevOps Engineer, SRE | Use exact role title |
| **experience** | Range | 0-2 years, 3-5 years, 5+ years, Fresher | Standard ranges only |
| **topic** | Category | Docker, Kubernetes, AWS | See topic list below |
| **question** | Full Question | Explain the difference between... | Clear and specific |
| **difficulty** | Level | easy, medium, hard | Question difficulty |
| **contributor** | Object | {name, github, linkedin} | Your details |
| **contributedAt** | YYYY-MM-DD | 2025-02-20 | Date contributed |
| **tags** | Array | ["docker", "containers"] | Related keywords |

### Formatting Rules

1. **Valid JSON**: Ensure proper JSON syntax with commas and brackets
2. **Unique IDs**: Each question must have a unique ID
3. **Required Fields**: All fields listed above are required
4. **LinkedIn Optional**: LinkedIn URL is optional but recommended
5. **Tags**: Add relevant tags for better searchability

### Valid Experience Levels

- **Fresher**: For entry-level positions
- **0-2 years**: Junior level
- **3-5 years**: Mid-level
- **5+ years**: Senior level

### Valid Topics

Use **ONLY** these standardized topics:

**DevOps Topics:**
- Docker
- Kubernetes
- Shell Scripting
- CI/CD
- AWS
- Azure
- GCP
- Terraform
- Ansible
- Jenkins
- Git
- Linux
- Networking
- Monitoring
- Security

### Example Entry

```json
{
  "id": "amazon-2024-001",
  "company": "Amazon",
  "year": 2024,
  "role": "DevOps Engineer",
  "experience": "3-5 years",
  "topic": "Docker",
  "question": "Explain the difference between Docker CMD and ENTRYPOINT. When would you use one over the other?",
  "difficulty": "medium",
  "contributor": {
    "name": "John Doe",
    "github": "@johndoe",
    "linkedin": "https://linkedin.com/in/johndoe"
  },
  "contributedAt": "2024-01-15",
  "tags": ["docker", "containers", "dockerfile"]
}
```

## 🔄 Pull Request Process

### PR Title Format

```
Add: [Company] [Topic] interview questions
```

**Examples:**
- `Add: Amazon Docker interview questions`
- `Update: Kubernetes questions formatting`
- `Fix: CSV parsing errors in CI/CD section`

### PR Description Template

```markdown
## Description
Brief description of the questions added

## Details
- Company: [Company Name]
- Number of Questions: [X]
- Topics Covered: [Docker, Kubernetes, etc.]
- Interview Year: [2024]

## Checklist
- [ ] I have followed the CSV formatting rules
- [ ] Questions are from real interviews
- [ ] No duplicate questions added
- [ ] My GitHub username is included as contributor
- [ ] Questions are clear and well-formatted
```

### Review Process

1. **Automated Checks**: CSV format validation will run automatically
2. **Maintainer Review**: A maintainer will review your PR within 48-72 hours
3. **Feedback**: Address any feedback or requested changes
4. **Merge**: Once approved, your PR will be merged

## ✅ Validation Checklist

Before submitting, verify:

- [ ] JSON file has no syntax errors
- [ ] All required fields are present
- [ ] ID is unique (not used by other questions)
- [ ] Company names are spelled correctly
- [ ] Year is in YYYY format (number, not string)
- [ ] Contributor object has name and github fields
- [ ] Experience level uses standard values
- [ ] Topic is from the approved list
- [ ] No duplicate questions
- [ ] Commit messages follow the format
- [ ] Branch name is descriptive

## 🎨 Best Practices

### Writing Good Questions

**Good Example:**
```json
{
  "id": "google-2024-001",
  "company": "Google",
  "year": 2024,
  "role": "SRE",
  "experience": "5+ years",
  "topic": "Kubernetes",
  "question": "How do you implement rolling updates in Kubernetes? What strategies would you use to ensure zero downtime?",
  "difficulty": "hard",
  "contributor": {
    "name": "Jane Smith",
    "github": "@janesmith",
    "linkedin": "https://linkedin.com/in/janesmith"
  },
  "contributedAt": "2024-02-20",
  "tags": ["kubernetes", "deployment", "rolling-update"]
}
```

**Why it's good:**
- Clear and specific
- Has proper context
- Real scenario-based
- Professional format
- All required fields present

**Bad Example:**
```json
{
  "id": "001",
  "company": "Some Company",
  "year": 2020,
  "role": "Engineer",
  "experience": "?",
  "topic": "K8s",
  "question": "How to use k8s?"
}
```

**Why it's bad:**
- Non-unique ID
- Vague company name
- Missing contributor information
- Invalid experience format
- Abbreviated topic
- Too generic question
- Missing required fields

### Multiple Questions

If adding multiple questions, add them all to the same JSON file:

```json
[
  {
    "id": "amazon-2024-001",
    "company": "Amazon",
    ...
  },
  {
    "id": "amazon-2024-002",
    "company": "Amazon",
    ...
  }
]
```

## 🐛 Reporting Issues

Found a problem? Please open an issue:

1. Go to the **Issues** tab
2. Click **New Issue**
3. Choose appropriate template
4. Provide detailed information

## 📞 Need Help?

- **Questions?** Open a discussion on GitHub
- **Stuck?** Tag maintainers in your PR
- **Suggestions?** Open an issue with your ideas

## 🌟 Recognition

All contributors will be:
- Listed in the repository contributors page
- Credited in their CSV entries
- Acknowledged in our community channels

## 📜 Code of Conduct

### Our Standards

- **Be Respectful**: Treat everyone with respect
- **Be Helpful**: Help other contributors
- **Be Honest**: Only add genuine interview questions
- **Be Professional**: Maintain professional communication

### Unacceptable Behavior

- Harassment or discrimination
- Spam or promotional content
- Sharing confidential information
- Plagiarism or false attribution

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Your contributions make this repository valuable for the entire community. Every question you add helps someone prepare better for their interview.

**Happy Contributing! 🚀**

---

**Questions?** Reach out to the maintainers or open a discussion on GitHub.
