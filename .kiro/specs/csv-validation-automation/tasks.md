# CSV Validation Automation - Tasks

## 1. Setup and Configuration

- [ ] 1.1 Create scripts directory structure
- [ ] 1.2 Create validation configuration file (validation_config.json)
- [ ] 1.3 Set up Python development environment requirements

## 2. Core Validation Script

- [ ] 2.1 Implement CSV parser with error handling
- [ ] 2.2 Implement structure validation (column count, required fields)
- [ ] 2.3 Implement format validation (year, contributor, experience)
- [ ] 2.4 Implement topic validation with approved list
- [ ] 2.5 Implement duplicate detection logic
- [ ] 2.6 Implement error reporting and markdown generation

## 3. Property-Based Tests

- [ ] 3.1 Write property test for column count invariant (Property 1.1)
  - **Validates:** Requirements 2.1
  - **Property:** All valid CSV rows must have exactly 7 columns

- [ ] 3.2 Write property test for non-empty fields (Property 1.2)
  - **Validates:** Requirements 2.2
  - **Property:** All fields in valid CSV rows must be non-empty

- [ ] 3.3 Write property test for year format validity (Property 2.1)
  - **Validates:** Requirements 2.3
  - **Property:** Year must be 4-digit integer in range [2020, 2026]

- [ ] 3.4 Write property test for contributor format (Property 2.2)
  - **Validates:** Requirements 2.4
  - **Property:** Contributor must match pattern ^@[a-zA-Z0-9_-]+$

- [ ] 3.5 Write property test for experience level validity (Property 2.3)
  - **Validates:** Requirements 2.5
  - **Property:** Experience must be in approved set

- [ ] 3.6 Write property test for topic validity (Property 3.1)
  - **Validates:** Requirements 3.1, 3.2
  - **Property:** Topic must be in approved topics list (case-sensitive)

- [ ] 3.7 Write property test for question uniqueness (Property 4.1)
  - **Validates:** Requirements 4.1, 4.2
  - **Property:** Normalized question text must be unique across all rows

- [ ] 3.8 Write property test for CSV syntax validity (Property 5.1)
  - **Validates:** Requirements 5.1, 5.2
  - **Property:** CSV file must be parseable by standard CSV parser

## 4. Unit Tests

- [ ] 4.1 Write unit tests for CSV parser edge cases
- [ ] 4.2 Write unit tests for structure validation
- [ ] 4.3 Write unit tests for format validation
- [ ] 4.4 Write unit tests for topic validation with suggestions
- [ ] 4.5 Write unit tests for duplicate detection
- [ ] 4.6 Write unit tests for error report generation

## 5. GitHub Actions Integration

- [ ] 5.1 Create GitHub Actions workflow file
- [ ] 5.2 Configure workflow triggers (PR, manual dispatch)
- [ ] 5.3 Implement PR comment posting
- [ ] 5.4 Configure workflow status reporting
- [ ] 5.5 Test workflow with sample PRs

## 6. Documentation

- [ ] 6.1 Update CONTRIBUTING.md with validation information
- [ ] 6.2 Create validation troubleshooting guide
- [ ] 6.3 Document validation rules in README
- [ ] 6.4 Add examples of common validation errors

## 7. Testing and Validation

- [ ] 7.1 Test with current CSV file
- [ ] 7.2 Test with intentionally malformed CSV
- [ ] 7.3 Test with large CSV files (performance)
- [ ] 7.4 Test GitHub Actions workflow end-to-end
- [ ] 7.5 Verify error messages are clear and actionable

## 8. Deployment

- [ ] 8.1 Merge validation script to main branch
- [ ] 8.2 Enable GitHub Actions workflow
- [ ] 8.3 Monitor first few PRs for issues
- [ ] 8.4 Gather feedback from contributors
- [ ] 8.5 Iterate on error messages based on feedback

## Notes

- Use Python 3.11+ for the validation script
- Keep dependencies minimal (standard library preferred)
- Ensure validation completes within 30 seconds
- Make error messages actionable and beginner-friendly
- Test with both valid and invalid CSV data
