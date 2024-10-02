function transposeMatrix(matrix) {
  let arr = [];
  let row = matrix.length;
  let col = matrix[0].length;
  
  for (let i = 0; i < col; i++) {
    let subArr = [];
    for (let j = 0; j < row; j++) {
      subArr.push(matrix[j][i]);
    }
    arr.push(subArr);
  }
  return arr;
}
