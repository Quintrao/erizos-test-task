export function printMatrixInSpiral(matrix: number[][]): number[] | void{
  if (matrix.length === 0) return [];
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftColumn = 0;
  let rightColumn = matrix[0].length - 1;
  const result: number[] = [];

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    for (let i = leftColumn; i <= rightColumn; i++) {
      console.log(matrix[topRow][i]);
      result.push(matrix[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      console.log(matrix[i][rightColumn]);
        result.push(matrix[i][rightColumn]);
    }
    rightColumn--;

    if (topRow <= bottomRow) {
      for (let i = rightColumn; i >= leftColumn; i--) {
        console.log(matrix[bottomRow][i]);
        result.push(matrix[bottomRow][i]);
      }
      bottomRow--;
    }

    if (leftColumn <= rightColumn) {
      for (let i = bottomRow; i >= topRow; i--) {
        console.log(matrix[i][leftColumn]);
        result.push(matrix[i][leftColumn]);
      }
      leftColumn++;
    }
  }

  return result;
}
