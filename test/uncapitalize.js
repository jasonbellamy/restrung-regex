import {assert} from 'chai';
import uncapitalize from '../src/uncapitalize.js';

describe('#uncapitalize', () => {
  it('should lowercase the first letter of a string', () => {
    assert.equal(uncapitalize('Hello'), 'hello');
    assert.equal(uncapitalize('Hello There'), 'hello There');
    assert.equal(uncapitalize('1Hello'), '1Hello');
    assert.equal(uncapitalize('hello'), 'hello');
  });
});
