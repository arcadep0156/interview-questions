# GitHub Actions Auto-Deploy Setup

This guide explains how interview questions automatically update on the community website when PRs are merged.

## How It Works

```
1. Student adds questions to interview-questions repo
2. Creates PR → Merge to main
3. GitHub Action triggers in interview-questions repo
4. Sends webhook to community-website repo
5. community-website rebuilds and deploys
6. New questions appear on website! ✅
```

## Architecture

### Repo 1: `arcadep0156/interview-questions`
- Contains JSON files with interview questions
- When PR merges to `main`, triggers workflow

### Repo 2: `arcadep0156/community-website`
- Main website that displays questions
- Listens for `repository_dispatch` events
- Auto-rebuilds when triggered

## Setup Instructions

### Step 1: Create Personal Access Token (PAT)

1. Go to https://github.com/settings/tokens/new
2. Click "Generate new token (classic)"
3. Name it: `TRIGGER_TOKEN_INTERVIEW_QUESTIONS`
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 2: Add Secret to interview-questions Repo

1. Go to https://github.com/arcadep0156/interview-questions/settings/secrets/actions
2. Click "New repository secret"
3. Name: `TRIGGER_TOKEN`
4. Value: Paste the PAT from Step 1
5. Click "Add secret"

### Step 3: Test the Workflow

1. Make a small change to any JSON file in `interview-questions/data`
2. Commit and push to `main` (or merge a PR)
3. Go to https://github.com/arcadep0156/interview-questions/actions
4. You should see "Trigger Community Website Rebuild" running ✅
5. Go to https://github.com/arcadep0156/community-website/actions
6. You should see "Deploy to GitHub Pages" running ✅
7. Wait 2-3 minutes for deployment
8. Visit https://arcadep0156.github.io/community-website/interview-questions
9. **New questions should appear immediately!** 🎉

## Workflow Files

### interview-questions/.github/workflows/trigger-deploy.yml
Sends webhook to community-website when JSON files change.

### interview-questions/.github/workflows/validate.yml
Validates JSON schema and data quality on every PR.

### interview-questions/.github/workflows/auto-generate-index.yml
Auto-generates index.json and contributors.json after validation.

### community-website/.github/workflows/deploy.yml
Listens for webhooks and rebuilds the site.

## Timeline

| Time | Event |
|------|-------|
| 0:00 | PR merged to interview-questions/main |
| 0:05 | GitHub Action triggers webhook |
| 0:10 | community-website starts building |
| 2:00 | Build completes |
| 2:30 | Deployed to GitHub Pages ✅ |
| 3:00 | CDN cache clears |
| **3:00** | **New questions live on website!** 🚀 |

## Benefits

✅ **Zero manual intervention** - No need to manually trigger deploys  
✅ **Automatic updates** - Questions appear within 3 minutes of merge  
✅ **No refresh needed** - New build = fresh data for everyone  
✅ **Same as Projects section** - Consistent with existing workflow  
✅ **Scalable** - Works for any number of contributors  

## Troubleshooting

### Webhook not triggering?
1. Check if `TRIGGER_TOKEN` secret exists in interview-questions repo
2. Verify token has `repo` and `workflow` scopes
3. Check Actions logs: https://github.com/arcadep0156/interview-questions/actions

### Build failing?
1. Check community-website Actions: https://github.com/arcadep0156/community-website/actions
2. Look for errors in build logs
3. Verify JSON files are valid (no syntax errors)

### Questions not updating?
1. Clear browser cache (Ctrl + Shift + R)
2. Wait 5 minutes for CDN cache to clear
3. Check if JSON was actually updated on GitHub

## Alternative: Scheduled Builds

If webhooks don't work, you can rely on the hourly cron job:

```yaml
schedule:
  - cron: '0 * * * *'  # Runs every hour
```

This means questions will update within **maximum 1 hour** after merge (without webhooks).

## Summary

With this setup, your workflow is:

1. Student: Add questions → Create PR
2. You: Review → Merge PR  
3. **GitHub Actions: Auto-deploy ✅**
4. Everyone: Sees new questions within 3 minutes! 🎉

**No manual refresh, no revalidate timers, no client-side polling needed!**

Just like your sir wants - exactly how Projects section works! 👍
