import fs from 'file-system'

function generateHTML(manager) {
    // Create an HTML template using the manager's information and the team members' information
    const template = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Team Profile</title>
        <style>
          /* Add some styling to the HTML template */
        </style>
      </head>
      <body>
        <h1>${manager.getName()}</h1>
        <h2>Manager</h2>
        <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email: ${manager.getEmail()}</li>
          <li>Office number: ${manager.getOfficeNumber()}</li>
        </ul>
        <h2>Team</h2>
        <ul>
          ${manager.getTeam().map(member => {
            return `
              <li>
                <h3>${member.getName()}</h3>
                <p>${member.getRole()}</p>
                <ul>
                  <li>ID: ${member.getId()}</li>
                  <li>Email: ${member.getEmail()}</li>
                  ${member.getRole() === 'Engineer' ? `<li>GitHub: ${member.getGithub()}</li>` : ''}
                  ${member.getRole() === 'Intern' ? `<li>School: ${member.getSchool()}</li>` : ''}
                </ul>
              </li>
            `;
          }).join('')}
        </ul>
      </body>
      </html>
    `;
    
    // Write the HTML template to a file
    fs.writeFileSync('output/team.html', template);
  }
  
export default generateHTML