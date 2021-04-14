module.exports.leadCol = (x, y) => {
    if (x < 0 && y < 0) {
        if (Math.abs(x) > Math.abs(y)) {
            return {elem: x, index: 0};
        } else {
            return {elem: y, index: 1};
        }
    } else if (x < 0 && y >= 0){
        return {elem: x, index: 0};
    } else if (x >= 0 && y < 0){
        return {elem: y, index: 1};
    } else {
        console.log('Все оптимально!');
        return null;
    }
}

module.exports.leadRow = (obj) => {
    let arr = []

    obj.x.forEach((item, index) => {
        if (item > 0){
            arr.push({item, index})
        }
    })
    console.log(`Let's divide our elements and choose the minimum...`);

    let newArr = []
    obj.B.map((item, index) => {
        arr.map(el => {
            if (el.index === index) {
                console.log(`${item}/${el.item} = ${item/el.item}`)
                newArr.push({index, item: item/el.item});
            }
        })
    })

    let min = newArr[0];
    newArr.map((item) => {
        if (item.item < min.item) {
            min.item = item.item
            min.index = item.index
        }
    })

    console.log(`Minimum is ${min.item}`);
    return min;
}