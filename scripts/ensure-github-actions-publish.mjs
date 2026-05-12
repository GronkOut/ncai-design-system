const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const workflowName = process.env.GITHUB_WORKFLOW;

if (isGitHubActions && workflowName === 'Release') {
  process.exit(0);
}

console.error(`
Local package publishing is disabled for this repository.

Use the GitHub Actions Release workflow instead:
1. Update package versions with pnpm version-packages.
2. Run verification locally if needed.
3. Commit and push to main.

The Release workflow publishes packages with the repository NPM_TOKEN secret.
`);

process.exit(1);
