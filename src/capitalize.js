const capitalize = (a) => {
  return a.replace(/(^.)(.+)/, function(match, a, b) {
    return a.toUpperCase() + b;
  });
};

export default capitalize;
