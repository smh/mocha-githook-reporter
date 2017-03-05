/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const { expect } = require('chai');

describe('Failing', () => {
  it('it should fail', () => {
    expect(true).to.be.false;
  });
});
