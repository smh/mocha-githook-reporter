const { expect } = require('chai');
const shelljs = require('shelljs');

const runTest = (test) =>
  shelljs.exec(`./node_modules/mocha/bin/mocha  --reporter index test/mock-tests/${test}`, { silent: true }).stdout;

describe('mocha githook reporter', () => {
  it('should not output anything when there are no failures', () => {
    expect(runTest('happy-test.js')).to.be.empty;
  });

  it('should report on the failing tests when there are failures', () => {
    expect(runTest('failing-test.js')).to.not.be.empty;
  });
});
