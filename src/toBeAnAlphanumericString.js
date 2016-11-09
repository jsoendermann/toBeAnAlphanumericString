import { isAlphanumeric } from 'validator';

export default (_util, _customEqualityTesters) => ({
  compare(actual, length) {
    if (typeof actual !== 'string') {
      return {
        pass: false,
        message: `${String(actual)} is not a string`,
      };
    }

    if (!isAlphanumeric(actual)) {
      return {
        pass: false,
        message: `${actual} is not alphanumeric`,
      };
    }

    if (length === undefined) {
      return { pass: true };
    } else if (actual.length !== length) {
      return {
        pass: false,
        message: `${actual} is alphanumeric but its length is incorrect: ${actual.length} !== ${length}`,
      };
    }
    return { pass: true };
  },
});
