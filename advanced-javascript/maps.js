// const map = new Map([
//     [1,'A'],
//     [2,'B'],
//     [3,'C'],
//     [4,'D'],
// ])

// console.log(map.clear())
// console.log(map.has(3))
// console.log(map.delete(3))
// console.log(map.get(3))
// console.log(map.set(5, "E"))


// console.log(map)
// console.log(map.values())
// console.log(map.entries())

// const myObj = [
//     {
//         id:1,
//         title:'title1',
//         desc:'desc 1'
//     },
//     {
//         id:2,
//         title:'title1',
//         desc:'desc 1'
//     },
//     {
//         id:3,
//         title:'title1',
//         desc:'desc 1'
//     },
//     {
//         id:4,
//         title:'title1',
//         desc:'desc 1'
//     },
// ]


// function findIndex(id){
//     return myObj.find(item => item.id == id)
// }

// console.log(findIndex(2))

// const items = new Map([
//     [1,{
//         id:1,
//         title:'title1',
//         desc:'desc 1'
//     }],
//     [2,{
//         id:2,
//         title:'title1',
//         desc:'desc 1'
//     }],
//     [3,{
//         id:3,
//         title:'title1',
//         desc:'desc 1'
//     }],
//     [4,{
//         id:4,
//         title:'title1',
//         desc:'desc 4'
//     }],
// ])

const items = new Map()

items.set(1,{
        id:1,
        title:'title1',
        desc:'desc 1'
    })
items.set(2,{
        id:2,
        title:'title1',
        desc:'desc 1'
    })
items.set(3,{
        id:3,
        title:'title1',
        desc:'desc 1'
    })

console.log(items.get(3))