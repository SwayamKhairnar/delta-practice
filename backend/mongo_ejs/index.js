const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const method_override=require("method-override");

const Chat=require("./models/chat.js");
const { isDate } = require("util/types");
const init=require("./init");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(method_override("_method"));
main()
    .then(()=>{
        console.log("connection extablished!");
    })
    .catch(err=>console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsaap");
}


//index route
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats})
})


//home route
app.get("/",(req,res)=>{
    res.send("working at 8080");
});


//new chat route
app.get("/chats/new",(req,res)=>{
    res.render("new");
})

//create new chat post
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newchat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:Date(),
    })
    newchat.save().then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
}) 


//edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", { chat });
});

//update the edited message
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg:new_msg}=req.body;
     let chat = await Chat.findByIdAndUpdate(
        id,
        { msg: new_msg },
        { runValidators: true, new: true } 
    );
    console.log(chat);
    res.redirect("/chats")
})


///delete the chat 
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedChat= await Chat.findByIdAndDelete(id)
    console.log(deletedChat);
    res.redirect("/chats")
})
app.listen(8080,()=>{
    console.log("Listening to port 8080");
});

