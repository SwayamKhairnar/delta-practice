const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./modules/listing.js");
const path = require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");


// MongoDB connection
const mongoose_url = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(mongoose_url);
}
main()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


  // View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"/public")));

// Routes
app.get("/", (req, res) => {
  res.send("Hi, I am Groot!! ");
});
//show all listings 
app.get("/listings", async (req, res) => {
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});


//create new listing
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

//create route post req
app.post("/listings",async(req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings")
});
//show specific listing
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    res.render("listings/show_item.ejs",{listing});
})

//edit specific listing
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})

//update the edited info
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings")
})

//delete a listing
app.delete("/listing/:id/delete", async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

// Start server
const port = 8080;
app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
