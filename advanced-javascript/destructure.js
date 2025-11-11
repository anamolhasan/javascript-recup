// Advanced Javascript
// Advanced Javascript
      
//    Destructuring in Javascript
//   array destructure
//   object destructure

const classTen = {
    classTeacher: 'Mr.X',
    students: 67,
    goodAt: {
        math: 20,
        english: 10,
        science: 17,
        others: 20
    }
}
const {classTeacher:teacher, students, goodAt:{math, english}} = classTen

// console.log(math, english)

// -- object --

let array = ['math', 'science', 'ict', 'english',['first', 'second'], 'bangla']

const [first, second, , ,h] = array
// console.log( h)



function individualNum (option){
    let math = option.math
    let english = option.english
    return [english, math, math - english]
    // return {english, math, ex:math - english}
}

const result = individualNum({math:82, english: 60})

console.log(result)