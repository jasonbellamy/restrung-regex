import camelCase from './camel-case.js';

const isCamelCase = (a) => {
  return camelCase(a) === a;
};

export default isCamelCase;
