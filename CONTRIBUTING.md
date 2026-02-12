# 🤝 Contributing to TrainWithShubham Interview Questions

Thank you for considering contributing to this repository! Your contributions help thousands of students and professionals prepare for their interviews.

## 📋 Table of Contents

- [How to Contribute](#how-to-contribute)
- [Contribution Guidelines](#contribution-guidelines)
- [CSV Formatting Rules](#csv-formatting-rules)
- [Pull Request Process](#pull-request-process)
- [Code of Conduct](#code-of-conduct)

## 🚀 How to Contribute

### Step 1: Fork the Repository

1. Navigate to [https://github.com/Nandan29300/interview-questions](https://github.com/Nandan29300/interview-questions)
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

Navigate to the appropriate folder and edit the CSV file:

```bash
cd devops
nano devops-interview-questions.csv
```

Add your interview questions following the format below.

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

## 📊 CSV Formatting Rules

### Required Columns

Your CSV entry must include all these columns:

```csv
company,year,contributor,role,experience,topic,question
```

### Column Guidelines

| Column | Format | Examples | Rules |
|--------|--------|----------|-------|
| **company** | Company Name | Amazon, Google, Microsoft, Flipkart | Use official company name |
| **year** | YYYY | 2024, 2023 | Use year of interview |
| **contributor** | @username | @johndoe, @shubham | Your GitHub username with @ |
| **role** | Job Title | DevOps Engineer, SRE, Cloud Engineer | Use exact role title |
| **experience** | Range | 0-1 years, 1-2 years, 3-5 years, 5+ years | Standard ranges only |
| **topic** | Category | Docker, Kubernetes, AWS, CI/CD | See topic list below |
| **question** | Full Question | Explain the difference between... | Use quotes for CSV |

### Formatting Rules

1. **Quotes**: Wrap questions containing commas in double quotes
   ```csv
   "Explain Docker, Kubernetes, and their differences"
   ```

2. **Escape Quotes**: Use double quotes to escape quotes within questions
   ```csv
   "What is ""Infrastructure as Code""?"
   ```

3. **Line Breaks**: Avoid line breaks within questions. Use single line.

4. **Special Characters**: Avoid special characters like pipes (|), tabs, or unusual symbols

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

```csv
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Docker,"Explain the difference between Docker CMD and ENTRYPOINT. When would you use one over the other?"
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

- [ ] CSV file has no syntax errors
- [ ] All 7 columns are present for each row
- [ ] Company names are spelled correctly
- [ ] Year is in YYYY format
- [ ] Contributor field has your @username
- [ ] Experience level uses standard ranges
- [ ] Topic is from the approved list
- [ ] Questions are enclosed in quotes if they contain commas
- [ ] No duplicate questions
- [ ] Commit messages follow the format
- [ ] Branch name is descriptive

## 🎨 Best Practices

### Writing Good Questions

**Good Example:**
```csv
Google,2024,@contributor,SRE,5+ years,Kubernetes,"How do you implement rolling updates in Kubernetes? What strategies would you use to ensure zero downtime?"
```

**Why it's good:**
- Clear and specific
- Has proper context
- Real scenario-based
- Professional format

**Bad Example:**
```csv
Some Company,2020,anonymous,Engineer,?,K8s,How to use k8s?
```

**Why it's bad:**
- Vague company name
- No contributor attribution
- Unclear role
- Invalid experience format
- Abbreviated topic
- Too generic question

### Multiple Questions

If adding multiple questions, add them all in one PR:

```csv
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Docker,"Question 1"
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Docker,"Question 2"
Amazon,2024,@johndoe,DevOps Engineer,3-5 years,Kubernetes,"Question 3"
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

**Questions?** Reach out to [@TrainWithShubham](https://twitter.com/trainwithshubham) or open a discussion on GitHub.
