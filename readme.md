# Instructions
This is a sample repo to replicate the bug described in https://github.com/semantic-release/npm/issues/357

## Normal Usage
1. Use Node 12 or Node 14, with default NPM (6.x) provided by that version of Node
2. Clone this repo
3. run `npm install`
4. run `npm start`

## Expected Results
* Generated directory `example` containing a `node_modules` folder and a `package.json`

## Triggering bug
Still on Node 12/14 with NPM 6.x:

1. Remove the directory created previously:
   * `rm -rf example`
1. Update to `@semantic-release/npm` v7.1.0:
   * `npm install --save-dev @semantic-release/npm@7.1.0`
2. Run `npm start`

### Resulting error

```
npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)

added 3 packages, and audited 4 packages in 719ms

3 low severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
(node:83494) UnhandledPromiseRejectionWarning: Error: Failed to install dependencies using npm install --save-dev jest-coverage-badges
    at ChildProcess.<anonymous> (/Users/amclin/Box Sync/git/poc-semantic-release-npm-error/index.js:39:14)
    at ChildProcess.emit (events.js:314:20)
    at maybeClose (internal/child_process.js:1022:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:287:5)
(node:83494) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:83494) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
