//상속
//자바스크립스의 상속 -  prototype 객체 활용
//People 클래스의 생성자
/*
function People(name) 
{
    this.name = name;
}
People.prototype.getName = function() {
    return this.name;
}
function Student(name, school)
{
    this.name = name;
    this.school = school;
}
Student.prototype = new People();
Student.construct = Student;
*/

var util = require('util');

function Parent () {
        console.log('Parent class');
}
Parent.prototype.sayHello = function ()
{
    console.log('Parent class');
}
function Child() {
    //상속되었다.
    //Child는 Parent를 상속한다.
    util.inherits(Child, Parent);
}
var child = new Child();
child.sayHello();