
//-----------FUNCTION-------------
const square = (side: number) => side * side

console.log(square(5))

let great: Function

great = () => { console.log('hello') }

great()

//

const addDefault = (a: number, b: number, c: number | string = 'default') => {
    console.log('sum:', a + b)
    console.log(c)
}

addDefault(1, 4)

const minus = (a: number, b: number): number => a - b