const truncate = (a, b) => {
  const reg = new RegExp(`(^.{0,${a}})(.*)`, 'g');
  return b.replace(reg, '$1...');
};

export default truncate;
