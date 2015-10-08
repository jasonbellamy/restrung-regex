const capitalize = (a) => {
  return a.replace(/(^[a-z])(.+)/, (match, a, b) => {
    return a.toUpperCase() + b;
  });
};

export default capitalize;
