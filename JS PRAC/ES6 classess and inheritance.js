class Employee{
    constructor(Name , Company , Experience){
        this.name = Name;
        this.company = Company;
        this.experience = Experience;
    }
    //it is contained in prototype
    slogan(){
        return`i am ${this.name} and ${this.company} is best`;

    }
    //a static method do not contains object of class
    static add(a,b){
        return a+b;
    }
}
//inheritance
//extends inherites the properties and methods of parent class to child class
class Programmer extends Employee{
    constructor(Name , Company , Experience ,language){
        super(Name ,Company , Experience);
        this.language = language;
    }

    favoriteLanguage(){
        if(this.language == "javaScript"){
            return'javaScript';
        }else{
            return`python`;
        }
    }
}

user1 = new Employee("sujan" , "google" , 10 );
user2 = new Programmer("Bipin" , "facebook" , 11 ,"javaScript");
console.log(user2);
console.log(user1);