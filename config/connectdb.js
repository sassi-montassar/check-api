const mongoose=require("mongoose")
require('dotenv').config({path : './config/.env'})
const connectdb=()=>{
   mongoose.connect(process.env.mongouri, {useNewUrlParser: true},{useUnifiedTopology: true}).then(()=>console.log("mongoose is connected")).catch((err)=>console.log(err))
};
module.exports=connectdb;