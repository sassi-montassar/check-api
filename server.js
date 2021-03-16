const express=require('express')
const users=require('./model/user')
const app=express()
const connectdb=require('./config/connectdb')

connectdb()
app.use(express.json())
app.get('/',(req,res)=>{
 users.find({},(err, docs)=>{err?res.send(err):res.send(docs)});

})
app.post('/',(req,res)=>{
 users.create({...req.body},(err)=>{err?res.send(err):res.send("user is added")})
})
app.put('/:_id',(req,res)=>{
 users.findOneAndUpdate({_id:req.params._id},{$set:{...req.body}},(err)=>{err?res.send(err):res.send("user is updated")})
})
app.delete('/:_id',(req,res)=>{
 users.findOneAndRemove({_id:req.params._id},(err)=>{err?res.send(err):res.send("user is removed")})
})
const PORT=process.env.PORT ||5000;
app.listen(PORT,(err)=>{err?console.log(err):console.log(`Server started on port ${PORT}`)})