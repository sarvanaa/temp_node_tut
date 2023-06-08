// const os=require('os')

// const user =os.userInfo()
// console.log(user)

// console.log('The System Uptime is',os.uptime(),'seconds')

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOS)

//path

const path=require('path')

console.log(path.sep)

const filePath=path.join('content','subcontent','test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute=path.resolve(__dirname,'content','subcontent','test.txt')
console.log(absolute)
