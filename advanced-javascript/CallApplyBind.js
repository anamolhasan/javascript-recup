const codeABC = {
    nameofthis : 'Code abc',
    founder:'Shahjalal rafi',
    establshed:2021,

    aboutPlatform: function(){
        console.log(this)
        console.log(`the founder of ${this.nameofthis} is ${this.founder}`)
    }
}

codeABC.aboutPlatform()
