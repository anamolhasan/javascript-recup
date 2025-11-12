

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

const teacherObj = {
    teacherName: 'Mr. Y',
    institute:'govt school'
}


let details = {...classTen, ...teacherObj}
// console.log(details)


let array = ['math', 'science', 'ict', 'english','bangla']

let newArr = [...array]

array.push('school')

// console.log(newArr)
// console.log(array)



// const [first, second, ...rest] = array

// console.log(first, second, rest)


function sumOfAllNum(...numbers){
    return numbers.reduce((num, currentValue) => num + currentValue, 0)
}

console.log(sumOfAllNum(2, 3, 5, 6))
