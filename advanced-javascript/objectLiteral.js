let firstName = 'Anamol Hasan'
let institute = 'Programming hero'
let greet = function(){
    console.log(`${firstName} make programming video for ${institute}`)
}

const myObject = {
    firstName: firstName,
    institute: institute,
    greet(){
        console.log(`${firstName} make programming video for ${institute}`)
    }
}

myObject[playList] = "Advance Javascript"

console.log(Object.values(myObject))

