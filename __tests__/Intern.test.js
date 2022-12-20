const Intern = require('./Intern');

test('Can set school via constructor argument', () => {
  const school = 'MIT';
  const i = new Intern('Jake', '123', 'Jake@example.com', school);
  expect(i.school).toBe(school);
});

test('getSchool() returns school', () => {
  const school = 'MIT';
  const i = new Intern('Jake', '123', 'Jake@example.com', school);
  expect(i.getSchool()).toBe(school);
});

test('getRole() returns "Intern"', () => {
  const i = new Intern('Jake', '123', 'Jake@example.com', 'MIT');
  expect(i.getRole()).toBe('Intern');
});