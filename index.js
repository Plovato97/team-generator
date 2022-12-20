import inquirer from 'inquirer'

inquirer.prompt([
  {
    name: 'name',
    message: 'What is the manager\'s name?'
  },
  {
    name: 'id',
    message: 'What is the manager\'s employee ID?'
  },
  {
    name: 'email',
    message: 'What is the manager\'s email address?'
  },
  {
    name: 'officeNumber',
    message: 'What is the manager\'s office number?'
  }
]).then(answers => {
  // Create a new Manager object using the answers
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  
  // Display the menu to add engineers or interns
  showMenu(manager);

  
});

function showMenu(manager) {
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'What would you like to do?',
      choices: ['Add engineer', 'Add intern', 'Finish building team']
    }
  ]).then(answers => {
    switch (answers.option) {
      case 'Add engineer':
        addEngineer(manager);
        break;
      case 'Add intern':
        addIntern(manager);
        break;
      case 'Finish building team':
        generateHTML(manager);
        break;
    }
  });
}
