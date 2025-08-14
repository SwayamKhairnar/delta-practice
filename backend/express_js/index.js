const express=require('express');
const app=express();


console.dir(app);

let port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("req recieved");
// //sending a responce after getting a req
//     res.send({
//         name:"swayam",
//         height:"6 4'",
//     })
// }); 


//using get
app.get("/",(req,res)=>{
    res.send("You contacted root path");
});
app.get("/apple",(req,res)=>{
    res.send("U contacted apple page");
});