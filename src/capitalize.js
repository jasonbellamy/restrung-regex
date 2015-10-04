const capitalize = (a) => {
  return a.replace(/(^[a-z])(.+)/, function(match, a, b) {
    return a.toUpperCase() + b;
  });
};

export default capitalize;
