export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    // /(?:(?!\d{4}).)*$/
    // ^[A-Za-z0-9_-]+$
    return (
      this.userName.search(/^[A-Z0-9_-]+$/i) !== -1 &&
      this.userName.search(/\d{4}/) == -1 &&
      this.userName.search(/^[^0-9_-]/) !== -1 &&
      this.userName.search(/[^0-9_-]$/) !== -1
    );
  }
}
