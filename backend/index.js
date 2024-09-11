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
app.get('/api/jokes',(req,res)=>{
    const joke=[
        {
          "id": 1,
          "title": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 2,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 3,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 4,
          "title": "Why don't skeletons fight each other?",
          "content": "They don't have the guts."
        },
        {
          "id": 5,
          "title": "What do you call cheese that isn't yours?",
          "content": "Nacho cheese!"
        },
      ]
     res.send(joke)      
})

app.listen(process.env.PORT || port, ()=>{
    console.log("listening"); 
})