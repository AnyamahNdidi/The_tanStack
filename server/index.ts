import express, { Application, Response, Request } from "express"
import mongoose from "mongoose"
import cors from "cors"
import db from  "./utilies/db"
import todoModel from "./model"


const port:number = 3040
const app :Application = express()
app.use(cors());
app.use(express.json())

db;

app.get("/", (req:Request, res:Response):Response =>
{
    return res.status(200).json({message:"api is up and running "})
})

//get all todo

app.get("/all/data", async (req:Request, res:Response) :Promise<Response> =>{

    try{
        const allTodo = await todoModel.find().sort({createdAt: -1})

        return res.status(200).json({
            message:"all todo",
            data:allTodo
        })
    }catch(error){

        return res.status(404).json({message: `error ${error}`});
    }

})

//create a todo
app.post("/datapost", async (req:Request, res:Response) :Promise<Response> =>{

    try{
        const {dec, title} = req.body
        const creteTodo = await todoModel.create({
            dec,
            title
        })

        return res.status(201).json({
            message:"suxes",
            data:creteTodo
        })
    }catch(error){

        return res.status(404).json({message: `error ${error}`});
    }

})



//get  one todo
app.get("/one/:id", async (req:Request, res:Response) :Promise<Response> =>{

    try{
       
        const oneTodo = await todoModel.findById(req.params.id)

        return res.status(201).json({
            message:"get one",
            data:oneTodo
        })
    }catch(error){

        return res.status(404).json({message: `error ${error}`});
    }

})


//update  one todo
app.patch("/update/:id", async (req:Request, res:Response) :Promise<Response> =>{

    try{
       
        const {title} = req.body
        const updateTodo = await todoModel.findByIdAndUpdate(req.params.id,
             {title},
             {new:true}
             )

        return res.status(201).json({
            message:"update suxesfully",
            data:updateTodo
        })
    }catch(error){

        return res.status(404).json({message: `error ${error}`});
    }

})

//delete  one todo
app.delete("/delete/one/:id", async (req:Request, res:Response) :Promise<Response> =>{

    try{
       
        const {title} = req.body
        const deleteTodo = await todoModel.findByIdAndRemove(req.params.id,)

        return res.status(201).json({
            message:"delete suxesfully",
        })
    }catch(error){

        return res.status(404).json({message: `error ${error}`});
    }

})




app.listen(port, ():void=>{
  console.log("server is up and running")
})