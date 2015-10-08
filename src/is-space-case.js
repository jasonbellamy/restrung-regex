const isSpaceCase = (a) => {
  const match = /(\w+\s.+)/g.exec(a);
  return (match) ? match[0] === a : false;
};

export default isSpaceCase;
