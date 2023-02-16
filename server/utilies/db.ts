import mongoose from "mongoose";
const url : string = "mongodb://0.0.0.0:27017/tanstacl";

mongoose.connect(url).then(()=>{
    console.log("database is coonected successfully")
}).catch((erro)=>{
    console.log("something went wrong", erro)
})

export default mongoose;