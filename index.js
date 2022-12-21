import inquirer from 'inquirer'

import Manager from './lib/manager.js';
import Intern from './lib/intern.js';
import Engineer from './lib/engineer.js'

import generateHTML from './generateHTML.js'
import fs from 'fs'

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
        generateTeam(manager);
        break;
    }
  });
}

function addEngineer(manager) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:"
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's ID:"
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email:"
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:"
      }
    ]).then(answers => {
      // Create a new Engineer object using the answers
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      
      // Add the engineer to the manager's team
      manager.addTeamMember(engineer);
      
      // Go back to the menu
      showMenu(manager);
    });
  }

  function addIntern(manager) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:"
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the intern's ID:"
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email:"
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:"
      }
    ]).then(answers => {
      // Create a new Intern object using the answers
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      
      // Add the intern to the manager's team
      manager.addTeamMember(intern);
      
      // Go back to the menu
      showMenu(manager);
    });
  }

function generateTeam(manager) {
        generateHTML(manager);
        console.log('My Team Created');
      }
