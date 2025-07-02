
const { capitalize, reverseString, calculator } = require('./index.js')

describe('capitalize function', () => {
  test('capitalizes the first character of a string', () => expect(capitalize('hello world')).toBe('Hello world'));

  test('capitalizes a single character', () => expect(capitalize('h')).toBe('H'));

  test('works with empty string', () => expect(capitalize('')).toBe(''))

  test('does not modified already capitalized string', () => expect(capitalize('Hello')).toBe('Hello'))
})

describe('reverse string function', () => {
  test('reverses a string', () => expect(reverseString('hello')).toBe('olleh'));

  test('reverses a single character', () => expect(reverseString('h')).toBe('h'));

  test('works with empty string', () => expect(reverseString('')).toBe(''))

  test('works with symbols', () => expect(reverseString('!hello')).toBe('olleh!'))

})

describe('calculator', () => {
  test('addition', () => expect(calculator.add(2, 3)).toBe(5));

  test('substraction', () => expect(calculator.substract(10, 2)).toBe(8));

  test('multiplication', () => expect(calculator.multiply(5, 5)).toBe(25))

  test('division', () => expect(calculator.divide(10, 2)).toBe(5))

})

describe('caesar cipher', () => {
  test('shifts each char by the shift factor', () => expect(caesarCipher('xyz', 3)).toBe('abc'));

  test('works with case preservation ', () => expect(caesarCipher('HeLLo', 3)).toBe('KhOOr'));

  test('works with punctuation, spaces, and other non-alphabetical characters', () => expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!'))



})