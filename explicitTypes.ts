//EXPLICIT TYPES
let myName: string = 'Chuong'
let age: number
let isAuthenticated: boolean

// Arrays
let students: string[] = ['nam', 'hung']

//union
let mixed: (string | number | boolean)[]

let bookID: string | number
bookID = '123'
bookID = 123

let hobby: 'book' | 'music'
hobby = 'book'
// hobby = 'cooking

//Objects
let person: object
person = {name: 'henry', age: 30}
person = []

let student: {
    name: 'chuong',
    age: 14
}
