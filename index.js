const express=require('express')
const { v4: uuidv4 } = require('uuid');

const app=express()

var list=[]

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({
        list
    })
})

app.post('/',(req,res)=>{
    var data=req.body
    data={...data,id:uuidv4()}
    list.push(data)
    res.send(data)
})

app.put('/',(req,res)=>{
    var data=req.body 
    res.send(data)
})

app.delete('/',(req,res)=>{
    var id=req.body.id
     
    list=list.filter((e)=>{
        return e.id!==id
    })

    res.send(id)
})



app.listen(4000,()=>
{
    console.log("server started")  
})