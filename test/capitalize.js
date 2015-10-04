import {assert} from 'chai';
import capitalize from '../src/capitalize.js';

describe('#capitalize', () => {
  it('should uppercase the first letter of a string', () => {
    assert.equal(capitalize('hello'), 'Hello');
    assert.equal(capitalize('hello there'), 'Hello there');
    assert.equal(capitalize('1Hello'), '1Hello');
    assert.equal(capitalize('Hello'), 'Hello');
  });
});
