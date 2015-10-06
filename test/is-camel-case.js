import {assert} from 'chai';
import isCamelCase from '../src/is-camel-case.js';

describe('#isCamelCase', () => {
  it('should be true if the string is camelCased', () => {
    assert.equal(isCamelCase('camelCase'), true);
  });
  it('should be false if the string is not camelCased', () => {
    assert.equal(isCamelCase('space case'), false);
    assert.equal(isCamelCase('CamelCase'), false);
    assert.equal(isCamelCase('camel-Case'), false);
    assert.equal(isCamelCase('camelCase-string'), false);
    assert.equal(isCamelCase('camelCase.string'), false);
  });
});
