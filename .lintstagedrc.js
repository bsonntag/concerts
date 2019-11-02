module.exports = {
  '*.css': ['prettier --write', 'git add'],
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  '*.json': ['prettier --write', 'git add'],
};
