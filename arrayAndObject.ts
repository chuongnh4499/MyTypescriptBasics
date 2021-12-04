// Array and Objects

let names = ['mai', 'nam', 'hung']
names.push('son')
//name.push(65)
//name.push(false)

let numbers = [1, 2, 3]
// numbers[0] = 'asd'
console.log(numbers)

//Mixed 
let mixed = [1, 'chuong', false]
mixed.push(5)
mixed.push('Choho')
mixed[2] = true

//Object 
let person = {
    name: 'chuong', 
    age: 34,
    isSuccess: false
}
//can not add new att
// person.bio = 'read'

let newPerson = {
    ...person,
    bio: 'read'
}