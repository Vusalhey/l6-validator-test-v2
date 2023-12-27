class StringSchema {
  constructor() {
    this.flag = false;
  }

  isValid(data) {
    if (typeof data !== 'string') {
      return false;
    }
    if (this.flag && !data.includes(' ')) {
      return false;
    }
    return true;
  }

  hasSpaces() {
    this.flag = true;
    return this;
  }
}

export default StringSchema;
