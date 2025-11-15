

const company = {
    companyName: 'Only Ummah',
    employ:9,
    address:{
        street:'84874, new gol',
        // location: 'chattogram, bangladesh',

    },
    playList: ['Data structure and algo', 'advanced JavaScript']
}

function findName(object){
    console.log(object.companyName)
    console.log(object.address?.location)
    console.log(object?.playList?.[0])
}

findName(company)