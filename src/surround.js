const surround = (a, b) => {
  return b.replace(/(^.*)/g, (c) => a + c + a);
};

export default surround;
