"use strict";
exports.__esModule = true;
exports.Employee = void 0;
// Class 
var Employee = /** @class */ (function () {
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
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.setName = function (name) {
        return this.name = name;
    };
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var chuong = new Employee('Chuong', 18, true);
var van = new Employee('van', 18, false);
//test function
chuong.setName('Nguyen Huu Chuong');
// console.log(chuong.print())
//dạng như arrayList
var employee = [];
//add to arrayList
employee.push(chuong);
employee.push(van);
employee.forEach(function (employee) { console.log(employee.print()); });
