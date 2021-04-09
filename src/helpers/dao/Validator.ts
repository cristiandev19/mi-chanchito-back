// module.exports =

export class Validator {
  invalid: boolean;
  message: String;

  constructor() {
    this.invalid = false;
    this.message = '';
  }

  setMessage(message) {
    this.message = message;
    this.invalid = true;
  }

  isInvalid() {
    return this.invalid;
  }
};
