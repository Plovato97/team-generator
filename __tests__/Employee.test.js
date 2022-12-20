const Employee = require('./Employee');

test('Can set name via constructor argument', () => {
  const name = 'Natalee';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('Can set id via constructor argument', () => {
  const id = '123';
  const e = new Employee('Natalee', id);
  expect(e.id).toBe(id);
});

test('Can set email via constructor argument', () => {
  const email = 'Natalee@example.com';
  const e = new Employee('Natalee', '123', email);
  expect(e.email).toBe(email);
});

test('getName() returns the name', () => {
  const name = 'Natalee';
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

test('getId() returns the id', () => {
  const id = '123';
  const e = new Employee('Natalee', id);
  expect(e.getId()).toBe(id);
});

test('getEmail() returns the email', () => {
  const email = 'Natalee@example.com';
  const e = new Employee('Natalee', '123', email);
  expect(e.getEmail()).toBe(email);
});

test('getRole() returns "Employee"', () => {
  const e = new Employee('Natalee', '123', 'Natalee@example.com');
  expect(e.getRole()).toBe('Employee');
});