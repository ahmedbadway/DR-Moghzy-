# DR. Moghazy — Project Standards

## Claude Code on Website Integration

1. **Claude Code Setup:**
   - Connect Claude Code to GitHub repository
   - Use access token stored in Environment variables
   - Network access: Trusted (for GitHub operations)

2. **GitHub Integration:**
   - Every push to main = automatic GitHub Actions deploy
   - Access token never hardcoded (always in env vars)
   - Commits pushed automatically by Claude Code

3. **Workflow with Claude Code:**
   - Edit code in Claude Code
   - npm run build (verify locally)
   - Commit message in English
   - git push origin main
   - GitHub Actions auto-deploys
   - Site updates in 1-2 minutes

4. **Cloud Environment Setup:**
   - Name: [Your Project Name]
   - Network access: Trusted
   - Environment variables:
     * GITHUB_TOKEN = your-access-token
     * NODE_ENV = production
   - Setup script:
     * npm install
     * npm run build

5. **Commands Always in English:**
   - All Claude Code commands: English
   - Code comments: English
   - Explanations: Arabic

6. **No Multiple Branches:**
   - Work only on main branch
   - No feature branches
   - Clean single-branch workflow

7. **Auto-Deploy:**
   - GitHub Actions handles deployment
   - No manual npm run deploy needed
   - Just edit, commit, push
   - Site updates automatically
