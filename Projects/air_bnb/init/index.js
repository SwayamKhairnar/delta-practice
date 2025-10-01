const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../modules/listing.js");

//connecting mongoose
const mongoose_url="mongodb://127.0.0.1:27017/wanderlust";
async function main() {
    await mongoose.connect(mongoose_url);
}

//main function call for setting up db
main().then(()=>{
    console.log("Connection established!");
})
.catch((err)=>{
    console.log(err);
})


//initializing database
const initDb=async ()=>{
    Listing.deleteMany({});
    Listing.insertMany(initData.data);
    console.log("Data was initialised !");
};

initDb();