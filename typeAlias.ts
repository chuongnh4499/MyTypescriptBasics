//ANY TYPES
let age: any = 25
age = 'chuong'
age = { a: 'b' }
age = [1, 2]

//TYPE ALIAS
type StringOrNumber = string | number
type Student = { 
    name: string
    id: StringOrNumber 
}


const studentDetails = (id: StringOrNumber, studentName: string): void => {
    console.log(`Student ${studentName} has ID: ${id}`)
    console.log(typeof id)
}

// studentDetails(123, 'Chuong')
// studentDetails('123', 'Chuong Nguyen')

const greet = (user: Student) => { console.log(user.id, user.name) }

greet({ name: 'chuong', id: 123 })