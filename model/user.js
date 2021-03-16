mongoose=require('mongoose')
const userShema=new mongoose.Schema({
 name:{type:String,required:true},
 email:{type:String,required:true},
 phone:String
})
const users = mongoose.model('users', userShema);
module.exports=users
