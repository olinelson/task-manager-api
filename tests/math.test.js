const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12)
})

test('FahrenheitToCelsius should convert 32 F to 0 C ', () => {
    expect(fahrenheitToCelsius(32)).toBe(0)
})

test('CelsiusToFahrenheit should convert 0 C to 32 F ', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
})

