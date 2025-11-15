let arr = [2,3,4,4,5,6,7,7]

// let set = new Set(arr)

// console.log(set.has(2))


function removeDuplicate(arr){
    // let newArray = []
    // for(let i = 0; i < arr.length; i ++ ){
    //     let element = arr[i]
    //     if(!newArray.includes(element)){
    //         newArray.push(element)
    //     }
    // }
    // return newArray

    let set  = new Set(arr)
    return [...set]
}


console.log(removeDuplicate(arr))

