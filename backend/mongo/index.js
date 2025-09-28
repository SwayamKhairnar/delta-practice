const mongoose=require("mongoose");

main()
    .then(()=>{
        console.log("connection established");
    })
    .catch(err=>console.log(err)); 

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema= new mongoose.Schema({
    name: String,
    email: String,
    age:Number,  
});

const User=mongoose.model("User",userSchema);
// 

// User.findById("68d3efa4ff647b28bc26f602")
User.findByIdAndDelete("68d3efa4ff647b28bc26f602")//kohli gone T_T
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// const user1=new User({
//     name:"Swayam",
//     email:"swayamkhairnar@gmail.com",
//     // net:"18 mill",
//     age:"18",
// })

// const user2=new User({
//     name:"parth",
//     email:"swayamkhairnar@gmail.com",
//     // net:"18 mill",
//     age:"18",
// })

// User.insertMany([
//     {name:"virat",age:"38",email:"viratkohli@gmail.com"},
//     {name:"rohit",age:"39",email:"rohitsharma@gmail.com"},
//     {name:"gambhir",role:"divider",email:"gambhir@gmail.com"},
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// user2
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// user1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
