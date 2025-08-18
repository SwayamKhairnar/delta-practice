const expr=require("express");
const app=expr();

console.dir(app);

port=8080;
app.listen(port,()=>{
    console.log("server is running fast")
});

app.use((req,res)=>{
    console.log("request recieved")
    //now to send a response use the res obj
    res.send("This is what u get");
});

