const camelCase = (a) => {
  return a
  .replace(/(^\s+|\s+$)/g, '')
  .replace(/(^\w+)/, (match, a) => a.toLowerCase() )
  .replace(/([A-Z])/g, ' $1')
  .replace(/(-|_|\.)/g, ' ')
  .replace(/(\s[a-z]?)/g, (match, a) => a.toUpperCase() )
  .replace(/\s/g, '');
};

export default camelCase;
