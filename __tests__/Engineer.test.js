const Engineer = require('./Engineer');

test('Can set GitHub username via constructor argument', () => {
  const github = 'Paulo';
  const e = new Engineer('Paulo', '123', 'Paulo@example.com', github);
  expect(e.github).toBe(github);
});

test('getGithub() returns GitHub username', () => {
  const github = 'Paulo';
  const e = new Engineer('Paulo', '123', 'Paulo@example.com', github);
  expect(e.getGithub()).toBe(github);
});

test('getRole() returns "Engineer"', () => {
  const e = new Engineer('Paulo', '123', 'Paulo@example.com', 'Paulo');
  expect(e.getRole()).toBe('Engineer');
});