const pascalCase = (a) => {
  return a
  .replace(/^[a-z]/, (b) => b.toUpperCase())
  .replace(/(\.|-|_)/g, ' ')
  .replace(/\s+[a-z]/g, (b) => b.toUpperCase())
  .replace(/\s/g, '');
};

export default pascalCase;
