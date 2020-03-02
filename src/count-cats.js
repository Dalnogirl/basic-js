module.exports = function countCats(matrix) {
  return matrix.length === 0 ? 0 : matrix.map(item => item.filter(i => i === "^^").length).reduce((a, i) => a += i);
};
