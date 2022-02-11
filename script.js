
//first assignemnt
class Rectangle {
    constructor(width, height) {
        [this.width,this.height]=[width, height];
    }

    get getwidth(){
        return this.width;
    }
    
    set setwidth(value){
        this.width = value
    }
    get getheight(){
        return this.height;
    }
    
    set setheight(value){
        this.height = value;
    }
 
    getArea() {
        return this.width * this.height;
    }

    getPerimeter(){
        return (this.width + this.height)*2
    }
    toString(){
        return `parametres ${this.width}, ${this.height}`;
    }
}
//let rect = new Rectangle(6, 8);
// console.log(rect.getArea());
// console.log(rect.getPerimeter());
// console.log(rect.toString());

// rect.setheight = 5
// console.log(rect.getheight);


// second assingment
class Employee {
    constructor(id, firstName, lastName, 
        position, salary, workingHours){
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.position = position;
            this.salary = salary; 
            this.workingHours = workingHours;
   }

   set fullname(value){
        [this.firstName, this.lastName] = value.split(" ")
   }

   get ID(){
       return this.id
   }

   set newsalary(value){
       this.salary = value
   }

   getfullname(){
       return `${this.firstName} ${this.lastName}`;
   }

   getAnnularSalary(){
       return this.salary * 12
   }

   raiseSalary(percent){
       this.salary += this.salary * percent/100
       return this.salary
   }
}

// let employee1 = new Employee(1, "Alex", "Brown", "salesman", 1200, 45)
// console.log(employee1.ID)
// console.log(employee1.getfullname())
// console.log(employee1.getAnnularSalary())
// console.log(employee1.raiseSalary(10))


//third assignment
class Author{
    constructor(name, email, gender){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get firstname(){
        return `${this.name.split(" ")[0]}`
    }
    set newemail(value){
        this.email = value
    }

    toString(){
        return `parametres: ${this.name}, ${this.email}, ${this.gender}`
    }
}

class Book{
    constructor(title, price,name, quantity){
        this.title = title;
        this.price = price;
        this.name = name;
        this.quantity = quantity;
    }

    set newprice(value){
        this.price = value
    }
    getProfit(){
        return this.price * this.quantity
    }
    toString(){
        return `parametres: ${this.title},${this.name}, ${this.price}, ${this.quantity}`
    }
}
// const author1 = new Author("Arthure Conan Doyle", "john1988@gmail.com", "male")
// const book1 = new Book("Sherlock Holmes", 10, author1.name, 300)
// console.log(author1.firstname)
// console.log(book1.getProfit())
// console.log(book1.toString())

//fourth assignment
class Account{
    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    get getid(){
        return this.id;
    }
    get getname(){
        return this.name;
    }
    get getbalance(){
        return this.balance;
    }

    set setname(value){
        this.name = value
    }
    set setbalamce(value){
        this.balance = value
    }

    credit(amount){
        this.balance +=amount
        return this.balance
    }
    debit(amount){
        if(amount > this.balance){
            return `Amount exceeded balance.`
        }else{
            this.balance -= amount
            return this.balance
        }
    }

    transferTo(anotherAccount, amount){
        if(amount > this.balance){
            return `Amount exceeded balance.`
        }else{
            this.balance -= amount
            anotherAccount.balance += amount;
            return this.balance
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        if(accountFirst.id == accountSecond.id &&
            accountFirst.name == accountSecond.name &&
            accountFirst.balance == accountSecond.balance){
                return `Those accounts are the same`
        }else{
            return `Those accounts are different`
        }
    }

    toString(){
        return `parametres: ${this.id},${this.name}, ${this.balance}`
    }
}

// let user1  = new Account(1, "John", 30)
// let user2  = new Account(2, "Jane", 30)
// console.log(user1.credit(100))
// console.log(user1.debit(150))
// console.log(user1.debit(10))
// console.log(user1.transferTo(user2, 20))
// console.log(user2.getbalance)
// console.log(Account.identifyAccounts(user1, user2))
// console.log(user1.toString())


//fivth assinment

class Person{
    constructor( firstName, lastName, gender, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender; 
        this.age = age;
    }

    set fullname(value){
        [this.firstName, this.lastName] = value.split(" ")
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
    toString(){
        return `parametres: ${this.firstName}, ${this.lastName}, ${gender}, ${age}`
    }
}

class Student extends Person{
    constructor(firstName, lastName, gender, age, 
        programs, year, fee){
        super(firstName, lastName, gender, age)
        this.programs = programs;
        this.year =  year; 
        this.fee =  fee
    }
    get yearfee(){
        return this.fee * 12
    }
    set addprogram(value){
        this.programs.push(value)
    }
    set deleteprogram(value){
        let index = this.programs.indexOf(value)
        this.programs.splice(index, 1)
    }
    passExam(program, grade){
        if(grade >= 50){
            let index = this.programs.indexOf(program)
            this.programs.splice(index, 1)
        }

        if(this.programs.length == 0){
            this.year += 1
            console.log("You have passed all the exams and been transfered to the next class")
        }
    }
    toString(){
        return `parametres: ${this.firstName}, ${this.lastName}, ${this.gender}, ${this.age}, ${this.programs}, ${this.year}, ${this.fee}`
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, gender, age, 
        program, pay){
        super(firstName, lastName, gender, age);
        this.program = program;
        this.pay = pay;
    }

    get annualsalary(){
        return this.pay * 12
    }

    set changeprogram(value){
        this.program = value
    }
    toString(){
        return `parametres: ${this.firstName}, ${this.lastName}, ${this.gender}, ${this.age}, ${this.program}, ${this.pay},`
    }
}

let student1 = new Student("Vahan", "Tadevosyan", "male", 18, ['a', 'b', 'c'], 12, 300)
let teacher1 = new Teacher("Tigran", "Margaryan", "male", 55, "math", 300)

// student1.passExam('a', 60)
// student1.deleteprogram = "b"
// student1.passExam('c', 60)
// student1.addprogram = "new"
// console.log(student1.toString())

// console.log(teacher1.toString())

// class Clock{
//     constructor(hours, mins, secs){
//         this.hours = hours;
//         this.mins = mins;
//         this.secs = secs;
//     }
// }


