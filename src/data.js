const model = {
    first: {
        x1: -4,
        x2: 2,
        B: 11
    },
    second: {
        x1: -2,
        x2: 2,
        B: 5,
    },
    third: {
        x1: 3,
        x2: 2,
        B: 6
    },
    z: {
        x1: 4,
        x2: 6
    }
}

module.exports.matrix = [
    [-model.z.x1, -model.z.x2, 0, 0, 0, 0],
    [model.first.x1, model.first.x2, 1, 0, 0, model.first.B],
    [model.second.x1, model.second.x2, 0, 1, 0, model.second.B],
    [model.third.x1, model.third.x2, 0, 0, 1, model.third.B]
]