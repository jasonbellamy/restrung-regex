const isPascalCase = (a) => {
  const match = /([A-Z][a-z]+)+/g.exec(a);
  return (match) ? match[0] === a : false;
};

export default isPascalCase;
