const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    image: {
        filename: { type: String, default: "listingimage" },
        url: { 
    type: String, 
    default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b..."
  }
    },
    location:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
})


const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;