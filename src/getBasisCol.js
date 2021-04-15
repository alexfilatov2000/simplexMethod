module.exports.getBasisCols = (matrix) => {
    let newM = matrix.map(item => item.slice());
    let I1;
    let J1;
    let I2;
    let J2;
    let I3;
    let J3;

    let i = 0;
    for (let j = 0; j < newM[i].length-1; j++) {
        if (newM[i][j] === 0 && newM[i+1][j] === 0 && newM[i+2][j] === 0 && newM[i+3][j] === 1) {
            I1 = i+3;
            J1 = j;
        }
        if (newM[i][j] === 0 && newM[i+1][j] === 0 && newM[i+2][j] === 1 && newM[i+3][j] === 0) {
            I2 = i+2;
            J2 = j;
        }
        if (newM[i][j] === 0 && newM[i+1][j] === 1 && newM[i+2][j] === 0 && newM[i+3][j] === 0) {
            I3 = i+1;
            J3 = j;
        }
    }

    newM[0].pop();
    const indexArr = []
    newM[0].filter((item, index) => {
       if (index !== J1 && index !== J2 && index!== J3){
           indexArr.push(index)
       }
    })

    return indexArr;
}
