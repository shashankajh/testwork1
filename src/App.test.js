const sum = require('./App')

test('Properly adds two numbers', () =>{
  expect(sum(1,2)).toBe(4)
})