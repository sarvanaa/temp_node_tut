
//synchronous
// const {readFileSync,writeFileSync}=require('fs') 
// console.log('start')

// const first=readFileSync('./content/first.txt','utf8')

// const second=readFileSync('./content/second.txt','utf8')

// console.log(first,second)


// writeFileSync(
//     './content/result-sync.txt',
//     'here is the result:first,second',
//     {flag:'a'},
//     console.log('done with a task')
// )

// console.log('start a new task');

//Asynchronus


const {readFile,writeFile}=require('fs');
console.log('start');

readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(result.toString());
   const first=result;

   readFile('./content/second.txt',(err,result)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(result.toString());
    const second=result;
    writeFile(
        './content/result-aasync.txt',
        'Here is the result :',(err,result)=>{
            if(err)console.error(err)
            
            console.log('done with a task');
        }
    )
   })
})
console.log('start with a new task');