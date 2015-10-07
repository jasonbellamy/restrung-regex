const snakeCase = (a) => {
  return a
    .replace(/\.|-/g, ' ')
    .replace(/\s/g, '_');
};

export default snakeCase;
