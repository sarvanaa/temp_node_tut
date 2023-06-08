//Modules 

// console.log(__dirname)
// setInterval(()=>{
//     console.log('Helloooo')
// },1000)

const names =require('./4-names') 
console.log(names)

const sayhi=require('./5-utlis')



sayhi('susan')
sayhi(names.john)
sayhi(names.peter)


const data=require('./6-alternate-method')
console.log(data)
console.log(data.singleperson.age)

require('./mind grenade')


