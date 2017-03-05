const mocha = require('mocha');

const { Base } = mocha.reporters;

module.exports = class GithookReporter extends Base {
  constructor(runner) {
    super(runner);
    runner.on('end', this.epilogue.bind(this));
  }

  epilogue() {
    if (this.stats.failures) {
      super.epilogue();
    }
  }
};
