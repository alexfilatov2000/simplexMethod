module.exports.out = (matrix) => {
    let I1;
    let J1;
    let I2;
    let J2;
    let I3;
    let J3;

    let i = 0;
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0 && matrix[i+1][j] === 0 && matrix[i+2][j] === 0 && matrix[i+3][j] === 1) {
            I1 = i+3;
            J1 = j;
        }
        if (matrix[i][j] === 0 && matrix[i+1][j] === 0 && matrix[i+2][j] === 1 && matrix[i+3][j] === 0) {
            I2 = i+2;
            J2 = j;
        }
        if (matrix[i][j] === 0 && matrix[i+1][j] === 1 && matrix[i+2][j] === 0 && matrix[i+3][j] === 0) {
            I3 = i+1;
            J3 = j;
        }
    }

    let newM = matrix.map(item => item.slice());
    let arr = [null,'x1','x2','S1','S2','S3','P'];
    newM.splice(0, 0, arr);

    newM[1].splice(0, 0, 'Z');
    newM[I1+1].splice(0, 0, arr[J1+1]);
    newM[I2+1].splice(0, 0, arr[J2+1]);
    newM[I3+1].splice(0, 0, arr[J3+1]);

    console.table(newM)
}
