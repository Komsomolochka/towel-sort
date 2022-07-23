
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let columnNumber;
  console.log(arguments)
  if (typeof matrix === 'undefined') {
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let stringNumber = i % 2 
        if (stringNumber === 0) {
          columnNumber = j
        } else {
          columnNumber = matrix[i].length - j - 1
          };
        result.push(matrix[i][columnNumber]);
      }
    }
  }
  return result ;

}
