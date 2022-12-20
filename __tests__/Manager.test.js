const Manager = require('./Manager');

test('Can set office number via constructor argument', () => {
  const officeNumber = '123';
  const m = new Manager('Paul', '123', 'Paul@example.com', officeNumber);
  expect(m.officeNumber).toBe(officeNumber);
});

test('getRole() returns "Manager"', () => {
  const m = new Manager('Paul', '123', 'Paul@example.com', '123');
  expect(m.getRole()).toBe('Manager');
});