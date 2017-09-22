const sum = require('./sum');

describe('sum function', () => {
  it('Should add two numbers', () => {

    expect(sum(1,3)).toEqual(4);
  })
})