const spaceCase = (a) => {
  return a
    .replace(/([A-Z])/g, ' $1')
    .replace(/(_|-|\.|\s+)/g, ' ')
    .replace(/(^\s|\s$)/g, '');
};

export default spaceCase;
