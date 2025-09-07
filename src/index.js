module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  return matrix
    .map((subArr, i) => (i % 2 !== 0 ? subArr.reverse() : subArr))
    .flat();
};
