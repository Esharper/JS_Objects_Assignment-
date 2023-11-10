'use strict'

 
const book={
    Title:'The Silent Patient',
    Type:"Novel",
    publishedYear:'2019'

}
console.log(book)

function printBookInfo(incomingBook){
    console.log('the book name is ${incomingBook.title}');
    console.log('the author of the book is ${incomingBook.author}');
    console.log('the book was published the year of ${incomingBook.published}');
}

printBookInfo("The Silent Patient","Novel","2019");
console.log(printBookInfo)


const studentProfile = {
    name: "Elgin",
    Age: 35,
    Courses: ["Front End Developer 1"]
};

console.log(studentProfile);

function addCourse(studentProfile, ...newCourses) {
    studentProfile.Courses.push(...newCourses);
    console.log(studentProfile);
}

function updateAge(studentProfile, newAge) {
    studentProfile.Age = newAge;
    console.log(studentProfile);
}

// Call addCourse with the studentProfile object and new courses
addCourse(studentProfile, "Algebra");

// Call updateAge with the studentProfile object and new age
updateAge(studentProfile, 36);
