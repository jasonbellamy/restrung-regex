const spaceCase = (a) => {
  return a
    .replace(/(_|-|\.)/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\s+/g, ' ')
    .replace(/^\s+/, '')
    .replace(/\s$/, '');
};

export default spaceCase;
