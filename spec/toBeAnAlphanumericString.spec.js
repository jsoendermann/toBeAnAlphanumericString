/* global describe, it, expect, beforeEach, jasmine */
/* eslint prefer-arrow-callback:0, func-names:0, global-require:0, import/no-extraneous-dependencies:0 */

var toBeAnAlphanumericString = require('../lib/toBeAnAlphanumericString').default;

describe('toBeAnAlphanumericString', function () {
  beforeEach(() => {
    jasmine.addMatchers({ toBeAnAlphanumericString });
  });

  it('should validate alphanumeric strings', () => {
    expect('arst').toBeAnAlphanumericString();
    expect('123').toBeAnAlphanumericString();
    expect('a1rs2t').toBeAnAlphanumericString();
    expect('arst').toBeAnAlphanumericString(4);
  });

  it("should reject things that aren't strings", () => {
    expect(null).not.toBeAnAlphanumericString();
    expect(undefined).not.toBeAnAlphanumericString();
    expect(0).not.toBeAnAlphanumericString();
    expect(() => {}).not.toBeAnAlphanumericString();
    expect({}).not.toBeAnAlphanumericString();
    expect(Symbol('test')).not.toBeAnAlphanumericString();
  });

  it('should reject non-alphanumeric strings or strings of incorrect length', () => {
    expect('').not.toBeAnAlphanumericString();
    expect('').not.toBeAnAlphanumericString(0);
    expect('_').not.toBeAnAlphanumericString();
    expect('_User').not.toBeAnAlphanumericString();
    expect('_$_').not.toBeAnAlphanumericString();
    expect('哈罗').not.toBeAnAlphanumericString();
    expect('arst').not.toBeAnAlphanumericString(5);
  });
});
