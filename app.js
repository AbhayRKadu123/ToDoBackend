const express=require('express')
const app=express();
const cors = require("cors");
app.use(cors())
app.use(express.json());

app.listen(8080,()=>{
    console.log('app is listening on port 8080')
})
app.get("/gettodo",(req,res)=>{
    console.log('app is listening on port 8080')
    res.json({msg:'app is listenng on port 80080  '})
})
app.post('/AddToDo',(req,res)=>{
    console.log(req.body)
    res.send('add to todo is the console to log value  ')
})
app.get('/login',(req,res)=>{
    res.send('this is login btn')
})