# Product Overview

TrainWithShubham Interview Questions Repository - a community-driven collection of real interview questions for DevOps, Cloud, and DevSecOps roles.

## Core Purpose

This repository serves as a structured database of real interview questions, consumed by the community website at https://arcadep0156.github.io/community-website/

## Key Features

- **Community Contributions**: GitHub-based workflow for submitting interview questions
- **Structured Data**: JSON format organized by year and company with schema validation
- **Quality Control**: Automated validation and contribution guidelines
- **Real Questions**: Focus on authentic questions from actual interviews (2023+)
- **Contributor Recognition**: LinkedIn integration and contributor leaderboard

## Data Structure

JSON format with required fields:
- `id` - Unique identifier (company-year-number)
- `company` - Company name where interview occurred
- `year` - Year of interview (YYYY as number)
- `role` - Job title/role interviewed for
- `experience` - Experience level (Fresher, 0-2 years, 3-5 years, 5+ years)
- `topic` - Standardized topic from approved list (Docker, Kubernetes, AWS, etc.)
- `question` - Full interview question text
- `difficulty` - Question difficulty (easy, medium, hard)
- `contributor` - Object with name, github, and optional linkedin
- `contributedAt` - Date contributed (YYYY-MM-DD)
- `tags` - Array of related keywords

## Target Audience

- DevOps engineers preparing for interviews
- Cloud practitioners seeking real-world interview questions
- DevSecOps professionals
- Students and freshers entering the field

## Integration

- Questions consumed by community website
- Searchable and filterable interface
- Automatic website rebuild on new questions
- Contributor tracking and recognition
