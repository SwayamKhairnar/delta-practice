const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main()
    .then(()=>{
        console.log("connection extablished!");
    })
    .catch(err=>console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsaap");
}


const chat = [
  {
    from: "Swayam",
    to: "Parth",
    msg: "Hello Parth!",
    created_at: new Date(),
  },
  {
    from: "Parth",
    to: "Swayam",
    msg: "Hey Swayam, how’s it going?",
    created_at: new Date(),
  },
  {
    from: "Ananya",
    to: "Swayam",
    msg: "Did you finish the project?",
    created_at: new Date(),
  },
  {
    from: "Swayam",
    to: "Ananya",
    msg: "Almost done, will share by tonight.",
    created_at: new Date(),
  },
  {
    from: "Rohan",
    to: "Parth",
    msg: "Game at 7 pm?",
    created_at: new Date(),
  },
  {
    from: "Parth",
    to: "Rohan",
    msg: "Yes, see you there!",
    created_at: new Date(),
  },
];

Chat.insertMany(chat);
