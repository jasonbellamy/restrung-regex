const clean = (a) => {
  return a
    .replace(/(^\s+|\s+$)/g, '')
    .replace(/\s+/g, ' ');
};

export default clean;
