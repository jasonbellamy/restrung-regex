const isCapitalized = (a) => {
  const match = /(^[A-Z]\w+)/g.exec(a);
  return (match) ? match[0] === a : false;
};

export default isCapitalized;
