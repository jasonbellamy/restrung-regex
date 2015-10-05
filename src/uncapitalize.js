const uncapitalize = (a) => {
  return a.replace(/(^[A-Z])(.+)/, function(match, a, b) {
    return a.toLowerCase() + b;
  });
};

export default uncapitalize;
