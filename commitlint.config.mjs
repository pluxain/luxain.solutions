export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "references-empty": [2, "never"],
    "type-enum": [2, "always", ["docs", "chore", "feat", "fix", "ref", "test"]],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ["#"],
    },
  },
};
