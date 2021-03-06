// a script rollup plugins repo
// https://github.com/rollup/plugins/blob/master/scripts/disallow-npm.js
// MIT License
//
const agent = process.env.npm_config_user_agent;
const { error } = console;

if (!agent.startsWith('pnpm')) {
  error('\nPlease use pnpm to manage dependencies in this repository.\n  $ npm i pnpm -g\n');
  process.exit(1);
}
