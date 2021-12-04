// Class 
export class Employee {
    //Cách 1:
    // public name: string;
    // private age: number;
    // readonly male: boolean;

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    // }

    //Cách 2:
    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ){}

    setName(name: string) {
        return this.name = name
    }
    
    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }

}

const chuong = new Employee('Chuong', 18, true);
const van = new Employee('van', 18, false);

//test function
chuong.setName('Nguyen Huu Chuong')
// console.log(chuong.print())

//dạng như arrayList
let employee: Employee[] = []

//add to arrayList
employee.push(chuong)
employee.push(van)

employee.forEach((employee) => {console.log(employee.print())})


