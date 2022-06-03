const array = [1, 2, 3, 4]

array.map(e => {
    return e*2
})

array.reduce((a, b) => a + b)

array.forEach(e => e*2)

array.forEach(e => {
    console.log(e)
})