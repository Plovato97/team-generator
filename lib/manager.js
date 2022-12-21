class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.team = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getTeam() {
    return this.team;
  }

  addTeamMember(teamMember) {
    this.team.push(teamMember);
  }

  getRole() {
    return 'Manager';
  }
}

export default Manager;