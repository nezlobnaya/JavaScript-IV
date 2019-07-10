'use strict'
// CODE here for your Lambda Classes

// Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
console.log(Person)
// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(attribs) {
        super(attribs);
        this.specialty = attribs.specialty;
        this.favLanguage = attribs.favLanguage;
        this.catchPhrase = attribs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

// #### Student


// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        console.log((this.favSubjects));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
 }

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor (atts) {
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according 
// to their unique Attributes.

const john = new Instructor({
    name: 'John',
    location: 'New-York',
    age: 39,
    favLanguage: 'JavaScript',
    specialty: 'Full Stack',
    catchPhrase: `And all that jazz`
  });

  const mary = new Instructor({
    name: 'Mary',
    location: 'Boston',
    age: 29,
    favLanguage: 'React',
    specialty: 'Full Stack',
    catchPhrase: `Yuo never know`
  });

  const vasya = new Student({
    name: 'Vasya',
    age: 25,
    location: 'Detroit',
    previousBackground: 'biological engineer',
    className: 'FS132',
    favSubjects: ['Vanilla JS', 'HTML', 'CSS']
  });

  const elen = new Student({
    name: 'Elen',
    age: 27,
    location: 'Boston',
    previousBackground: 'Interior designer',
    className: 'CS135',
    favSubjects: ['Algorithms & Data structures', 'Python', 'Nodejs'] 
  });

  const dave = new ProjectManager({
    name: 'Dave',
    location: 'Boston',
    age: 29,
    favLanguage: 'React',
    specialty: 'Full Stack',
    catchPhrase: `You never know`,
    gradClassName: 'FS1',
    favInstructor: 'Sean'
  });

  const shura = new ProjectManager({
    name: 'Shura',
    location: 'Miaimi',
    age: 31,
    favLanguage: 'Python',
    specialty: 'Back End',
    catchPhrase: `Let's rock!`,
    gradClassName: 'FS2',
    favInstructor: 'Billy'
  });


  console.log(`Instructor name:`, john.name, `Instructor location:`, john.location, `Instructor age:`, john.age);
  console.log(`Student's name:`, vasya.name, `student's age:`,vasya.age, `Student's location:`,vasya.location, `Student's background:`, vasya.previousBackground, `Student's class:`, vasya.className);
  console.log(john);
  console.log(shura);
  console.log(elen);
  console.log(dave);
  john.demo('HTML');
  mary.grade(elen.name, 'JavaScript')
  vasya.listsSubjects();
  elen.PRAssignment('HTML');
  vasya.sprintChallenge('Vanilla JS');
  shura.standUp('CS135');
  dave.debugsCode(vasya.name,'CSS');
 