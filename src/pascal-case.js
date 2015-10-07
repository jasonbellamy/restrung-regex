const pascalCase = (a) => {
  return a
  .replace(/(\.|-|_)/g, ' ')
  .replace(/(^[a-z]|\s+[a-z])/g, (b) => b.toUpperCase())
  .replace(/\s/g, '');
};

export default pascalCase;
