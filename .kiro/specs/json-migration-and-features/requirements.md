# JSON Migration and Feature Enhancements - Requirements

## Overview

Migrate interview questions repository from CSV to JSON format with enhanced features including contributor recognition, LinkedIn integration, automated workflows, and improved data structure.

## User Stories

### 1. As a contributor, I want to add questions in JSON format
So that I can include structured data like contributor information with LinkedIn profiles.

**Acceptance Criteria:**
- 1.1 Questions are stored in JSON files organized by year and company
- 1.2 Each question has a unique ID in format: company-year-number
- 1.3 Contributor information includes name, github, and optional linkedin
- 1.4 JSON schema validates all required fields
- 1.5 Year is stored as number, not string

### 2. As a contributor, I want my LinkedIn profile linked
So that I can get professional recognition and networking opportunities.

**Acceptance Criteria:**
- 2.1 Contributor object includes optional linkedin field
- 2.2 LinkedIn URL is validated as proper URI format
- 2.3 Contributors.json includes linkedin for all contributors
- 2.4 Website displays LinkedIn links with pipe separator format

### 3. As a fresher, I want to see questions for my experience level
So that I can prepare for entry-level interviews.

**Acceptance Criteria:**
- 3.1 "Fresher" is added as valid experience level
- 3.2 Schema validates Fresher as valid enum value
- 3.3 Questions can be filtered by Fresher level
- 3.4 Documentation includes Fresher in examples

### 4. As a maintainer, I want automated validation
So that data quality is maintained without manual checks.

**Acceptance Criteria:**
- 4.1 GitHub Actions validates JSON schema on every PR
- 4.2 Duplicate IDs are detected automatically
- 4.3 Topics are validated against approved list
- 4.4 Validation errors are reported in PR comments
- 4.5 Invalid PRs cannot be merged

### 5. As a maintainer, I want automated index generation
So that I don't have to manually update index files.

**Acceptance Criteria:**
- 5.1 index.json is auto-generated on data changes
- 5.2 contributors.json is auto-generated on data changes
- 5.3 README.md top contributors section is auto-updated
- 5.4 Auto-generated files are committed automatically
- 5.5 No manual script running required

### 6. As a user, I want the website to auto-update
So that I see new questions immediately after they're merged.

**Acceptance Criteria:**
- 6.1 Website rebuild is triggered on data changes
- 6.2 New questions appear within 3 minutes of merge
- 6.3 Contributors leaderboard updates automatically
- 6.4 No manual deployment needed

### 7. As a contributor, I want clear documentation
So that I know how to add questions correctly.

**Acceptance Criteria:**
- 7.1 CONTRIBUTING.md explains JSON format clearly
- 7.2 Quick start (TL;DR) section is provided
- 7.3 Examples show complete JSON structure
- 7.4 Topics list is documented
- 7.5 Experience levels are documented

### 8. As a DevOps engineer, I want comprehensive topic coverage
So that I can find questions for modern tools and technologies.

**Acceptance Criteria:**
- 8.1 Topics include: Ansible, Helm, Prometheus, Vault, etc.
- 8.2 Total of 27+ topics covering DevOps/Cloud stack
- 8.3 Topics are organized by category
- 8.4 New topics can be requested via PR

## Non-Functional Requirements

### Performance
- Validation completes within 30 seconds
- Index generation completes within 60 seconds
- Website rebuild completes within 3 minutes

### Scalability
- Supports 1000+ questions
- Supports 100+ contributors
- Supports 50+ companies

### Maintainability
- Clear separation of data and metadata
- Automated workflows reduce manual work
- Documentation is comprehensive and up-to-date

### Compatibility
- Works with GitHub Pages
- Compatible with static site generation
- JSON format is widely supported
