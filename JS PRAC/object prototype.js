let arr = [1,23,45];
//object literals : Object.Prototype
let obj = {
    name:"sujan",
    country:"nepal",
    info : function(){
        console.log(this.name + " from " + this.country);
    }
}

let Obj = function(givenName){
    this.name = givenName;
}
//proto
Obj.prototype.getName = function(){
    return this.name 
}

Obj.prototype.setName = function(newName){
    this.name = newName;
    //in console
    /*
    obj2.setName("pikachu");
    */
   
}


// let obj2 = new Obj("pixure");
// console.log(obj2)
// console.log(obj);

const proto = {
    slogan: function(){
        return`i like soan papdi`;
    },

    changeName: function(newName){
        this.name = newName;
    }
}
//this creates qwe Object
const qwe = Object.create(proto);
qwe.name = "sujan";
qwe.hobby = "programming";
console.log(qwe.slogan());

//prototype inheritance
//Employee
function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;

}
//slogan
Employee.prototype.slogan= function(){
    //we sould call this function with objectname , not the constructure
    return`i am ${this.name}`;
}
//language
Employee.prototype.language = function(){
    return`im learning JavaScript `
}
//obj
let user1 =  new Employee("sujan" , 1000 , 2);

console.log(user1.language());

//inheritance
function programmer (name,salary ,experience,language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}

let user2 = new programmer('Bipin',1000,2,"javaScript");
console.log(user2);



