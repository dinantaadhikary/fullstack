import dotenv from "dotenv"
import express from "express"
dotenv.config()
const port=4000
const app = express()


app.get("/",(req,res)=>{
    res.send("Danish Zehen")
})

app.get("/insta",(req,res)=>{
    res.send('<h2>chud gaye guru</h2>')
}
)

app.listen(process.env.PORT || port, ()=>{
    console.log("listening"); 
})