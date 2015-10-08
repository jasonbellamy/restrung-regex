const isUpperCase = (a) => {
  const match = /([A-Z])+/g.exec(a);
  return (match) ? match[0] === a : false;
};

export default isUpperCase;
