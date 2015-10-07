const swapCase = (a) => {
  return a.replace(/([A-Z])|([a-z])/g, (match, u, l) => {
    return u ? u.toLowerCase() : l.toUpperCase();
  });
};

export default swapCase;
