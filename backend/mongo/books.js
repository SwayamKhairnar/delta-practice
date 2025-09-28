const mongoose=require("mongoose");

main()
    .then(()=>{
        console.log("connection established!");
    })
    .catch((err)=>{
        console.log(err);
    })
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
})

const Book=mongoose.model("Books",bookSchema);


const book1=new Book({
    title:"One piece ",
    author:"Oda",
    price:1200 ,
})

book1.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err=>{
        console.log(err);
    }))