import camelCase from './camel-case.js';

const isCamelCase = (a) => {
  const match = /(^[a-z]+)([A-Z][a-z]+)+/g.exec(a);
  return (match) ? match[0] === a : false;
};

export default isCamelCase;
