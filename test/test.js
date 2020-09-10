var assert = require('assert');
var should = require('should');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('matching number and asserting number using should', function () {
      (5).should.be.exactly(5).and.be.a.Number();
    });
  });
});