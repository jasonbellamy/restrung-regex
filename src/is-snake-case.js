const isSnakeCase = (a) => {
  const match = /([a-z_])+/g.exec(a);
  return (match) ? match[0] === a : false;
};

export default isSnakeCase;
