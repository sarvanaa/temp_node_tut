const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req)

if(req.url==='/')res.end('Welcome to the landingpage');

if(req.url==='/about')res.end('Welcome About page');


if(req.url==='/home'){
res.end('Welcome to the Homepage')

}
if(req.url==='/error')res.end('<h1>Oops!</h1>',
'<p>Sorry</p>','<a href='/'>home</a>') 

})

server.listen(5000);