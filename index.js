let {matrix} = require('./data')
const {leadCol, leadRow} = require('./leadingElem');
const {newMatrix} = require('./renderNewMatrix')
const {out} = require('./out')


let main = () => {
    let col = leadCol(matrix[0][0], matrix[0][1])
    while (col !== null) {
        out(matrix);
        console.log('Определяем ведущую колонку...');
        console.log(`Смотрим какой елемент(обязательно меньше нуля) больше по модулю (${matrix[0][0]}; ${matrix[0][1]})...`);
        console.log(`So |${col.elem}| is bigger, choose the column by index ${col.index}`);
        console.log(`\nChoose the leading row...`)

        let tempElem = {
            x: [matrix[1][col.index], matrix[2][col.index], matrix[3][col.index]],
            B: [matrix[1][5], matrix[2][5], matrix[3][5]]
        }

        let row = leadRow(tempElem);
        let lEl = matrix[row.index+1][col.index]

        console.log(`\nSo leading element position is (${row.index+1}; ${col.index}), leading element is ${lEl}`);
        console.log(`Let's build new matrix...`)

        matrix = newMatrix(matrix, row.index+1, col.index);
        col = leadCol(matrix[0][0], matrix[0][1])
    }
}

main()






