const students = [
  {
    id: 1,
    name: "Abhinav",
    age: 21,
    course: "CSE",
    marks: 85,
    skills: ["JavaScript", "React", "Node.js"],
    isPlaced: false
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
    course: "IT",
    marks: 72,
    skills: ["Java", "Spring Boot"],
    isPlaced: true
  },
  {
    id: 3,
    name: "Sneha",
    age: 20,
    course: "CSE",
    marks: 91,
    skills: ["Python", "Machine Learning"],
    isPlaced: true
  },
  {
    id: 4,
    name: "Priya",
    age: 23,
    course: "ECE",
    marks: 65,
    skills: ["Embedded C", "IoT"],
    isPlaced: false
  },
  {
    id: 5,
    name: "Karan",
    age: 21,
    course: "CSE",
    marks: 78,
    skills: ["JavaScript", "MongoDB"],
    isPlaced: true
  }
];
students.forEach((num,index,arr)=>{ 
    console.log(`this is an example of for each and name is ${num.name}`);
})
const newArr = students.filter((num)=>num.age>=21 && num.course=="CSE" )
console.log(newArr);

// Add grace marks to all students;

const newMarks = students.map((student)=>({marks:student.marks+=5,name:student.name}));
console.log(newMarks);

// get Names of Students Who Know JavaScript

const javaKnown = students.filter((student)=>student.skills.includes("JavaScript")).map((student)=>({name:student.name}));
console.log(javaKnown);


//customized 