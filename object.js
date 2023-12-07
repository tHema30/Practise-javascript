// 1 create empty javascript object
let empty={

};
console.log(empty);

// in object
 var person={
    name:"Hema",
    age:23,
    status:"single",
    introduceYou:function(){
        console.log("i am " +this.status);
    }
 };
 person.introduceYou();

// add a new property
person.email="hema@example.com";
console.log(person["email"]);

// remove a property

delete person.email;
console.log(person);

// to checkout the property 
console.log("email"in person);

// merge two obejects

var student={
    name:"Hema",
    age:23,
};

var course={
    courseName:"coding",
}

 var studentCourse = Object.assign(student,course);
console.log(studentCourse);



// 