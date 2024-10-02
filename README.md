**Transpose Matrix Function:**

This function, transposeMatrix, takes a 2D matrix (array of arrays) as input and returns its transpose. The transpose of a matrix is obtained by flipping the matrix over its diagonal, meaning the row and column indices are swapped.

Function Signature:

	function transposeMatrix(matrix)
 
Parameters:

matrix: A two-dimensional array (matrix) where each element matrix[i][j] represents the element in the i-th row and j-th column.

Returns:

A new matrix which is the transpose of the input matrix. In the transposed matrix, element matrix[i][j] becomes matrix[j][i].

How It Works:

1. The function initializes an empty array arr to store the transposed matrix.
2. It calculates the number of rows and columns in the original matrix using:
   
		row = matrix.length
		col = matrix[0].length

3. It iterates over the columns (i), and for each column, it creates a new sub-array by iterating through each row (j) and appending the elements in the transposed order.
4. The final result is stored in arr, which is then returned.
   
Example:

	let matrix = [
	  [1, 2, 3],
	  [4, 5, 6]
	];

	let transposed = transposeMatrix(matrix);
	console.log(transposed); 
 
// Output: 

	// [
	//   [1, 4],
	//   [2, 5],
	//   [3, 6]
	// ]

Time Complexity:

The function has a time complexity of O(m * n), where m is the number of rows and n is the number of columns. This is because the function iterates through each element of the matrix once. It will require the same space as the original input. So, space complexity is O(m * n), where m is the number of rows and n is the number of columns. 

Usage:

This function is useful when working with matrices in mathematical computations, graphics programming, or data manipulation, where transposing a matrix is a common operation.
