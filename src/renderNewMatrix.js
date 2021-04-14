const {out} = require('./out')

module.exports.newMatrix = (matrix, leadRow, leadCol) => {
    let newMatrix = [
        ['?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?'],
        ['?', '?', '?', '?', '?', '?'],
    ]

    const leadElem = matrix[leadRow][leadCol];

    for (let i = 0; i<matrix[leadRow].length; i++){
        newMatrix[leadRow][i] = matrix[leadRow][i]/leadElem;
    }

    newMatrix.forEach((item, i, arr) => {
        if (arr[i][leadCol] === '?') arr[i][leadCol] = 0;
    })

    for (let i = 0; i<matrix[leadRow].length; i++){
        for (let i = 0; i<matrix[leadRow].length; i++){
            newMatrix[leadRow][i] = matrix[leadRow][i]/leadElem;
        }
    }

    console.table(newMatrix);
    console.log(`Теперь используем правило прямоугольников...`);

    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < newMatrix[i].length; j++) {
            if (newMatrix[i][j] === '?'){
                let diffJ = leadCol - j;
                let diffI = leadRow - i;
                newMatrix[i][j] = iterationWithOldMatrix(i, j, diffI, diffJ, matrix, leadElem);
            }
        }
    }
    out(newMatrix);
    return newMatrix;
}

let iterationWithOldMatrix = (i, j, diffI, diffJ, matrix, leadElem) => {
    let elI = matrix[i + diffI][j];
    let elJ = matrix[i][j + diffJ]
    return (leadElem * matrix[i][j] - elI * elJ)/leadElem;
}