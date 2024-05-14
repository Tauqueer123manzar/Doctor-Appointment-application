import app from './app.js'

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(process.env.PORT,()=>{
    console.log(`server is runing now ${process.env.PORT}`);
})