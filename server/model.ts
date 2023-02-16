import mongoose from "mongoose";

interface myTodo {
    title: string;
    des: string
}

interface iMyTodo extends myTodo, mongoose.Document {}

const todoModel = new mongoose.Schema({
    title:{
        type:String,
    },

    dec:{
        type:String,
    }
},
{timestamps: true}

)

export default mongoose.model<iMyTodo>("todos", todoModel)