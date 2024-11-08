import app from "./app.js";

app.get("/",(req, res)=>{
    res.send("API Working")
})

app.listen(process.env.PORT,()=>{
    console.log("server is running on port http://localhost:4000")
})