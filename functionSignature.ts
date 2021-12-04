//Function Signature
//Ví dụ 1:
let calculate: (a: number, b: number, c: string) => number

calculate = (numOne: number, numTwo: number, option: string) => {
    return (option === 'add' ? numOne + numTwo : numOne - numTwo)
}

console.log(calculate(7, 5, 'minus'))

//Ví dụ 2:
type Student = {name: String; age: number}

let printStudent: (student: Student) => void

printStudent = ({name, age}: Student) => {
    console.log(`name: ${name}, age: ${age}`)
}

printStudent({name: 'chuong', age: 30})