'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const university = {
  teacherName: ['Peter', 'Jessie', 'Alex', 'Kevin'],
  location: 'Bangkok',
  subject: ['English', 'Math', 'History', 'Art'],
  roomNumber: ['A1', 'B2', 'C3', 'D4'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // Array Ref Basic 2 with Function
  classDetail: function (mainTeacher, mainSubject) {
    return [this.teacherName[mainTeacher], this.subject[mainSubject]];
  },
};
console.log(university.classDetail(1, 2));

// Ref Basic 1 Array
// const [mainSubject, seconSubject] = university.subject;
console.log(mainSubject, seconSubject);

// Ref 3 [Nested] Array

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(`Nested,i, j, k`);

// Ref 4 [Recive two value from a function]

const [mainSubject, subSubject] = university.classDetail(2, 1);
console.log(mainSubject, subSubject);

// Ref 5 [This and arrow function]
const personName = {
  firstName: 'Darren',
  lastName: 'Taylor',
  yesr: '1995',
  calcAgee: function () {
    console.log(2024 - this.yesr);
    const isMe = () => {
      console.log(this.yesr >= 2020 && this.yesr <= 2024);
    };
    isMe();
  },
};
personName.calcAgee();
