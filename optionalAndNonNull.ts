//Optional and Non Null

const add = (a: number, b?: number) => (b? a + b : a)
// console.log(add(252, 1231))


// Non Null
const addWithNonNull = (a: number, b?: number) => a + b! 

console.log(addWithNonNull(3, 4))
console.log(addWithNonNull(3))
