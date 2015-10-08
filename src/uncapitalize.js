const uncapitalize = (a) => {
  return a.replace(/(^[A-Z])(.+)/, (match, a, b) => {
    return a.toLowerCase() + b;
  });
};

export default uncapitalize;
