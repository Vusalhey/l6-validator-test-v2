class FunctionSchema {
  constructor() {
    this.call = false;
    this.properties = {};
    this.expected = null;
    this.args = null;
  }

  context(value) {
    const result = value.apply(this.properties, this.args);
    if (result === this.expected) {
      return true;
    }
    return false;
  }

  isValid(data) {
    if (typeof data !== 'function') {
      return false;
    }
    if (this.call && !this.context(data)) {
      return false;
    }
    return true;
  }

  callWith(props) {
    this.properties = props;
    this.call = true;
    return this;
  }

  expect(value) {
    this.expected = value;
    this.call = true;
    return this;
  }

  arguments(...value) {
    this.args = value;
    this.call = true;
    return this;
  }
}
export default FunctionSchema;
