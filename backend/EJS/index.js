const express=require('express');
const app=express();
const path = require('path');

//sets a default path for the views
app.set('views', path.join(__dirname, 'views'));
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));


//shows that server is running
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// displays the response in the browser
app.get('/', (req, res) => {
  res.send('<h1>Hello, EJS!</h1>');
});


// Render the home.ejs view
app.get('/home', (req, res) => {
  res.render('home');
});


app.get('/rolldice',(req,res)=>{
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    // Pass the diceRoll variable to the EJS template
    res.render('rolldice', { diceRoll });
})


// instagram 
app.get('/instagram', (req, res) => {
  res.send('<h1>Instagram Page</h1>');
});

//indta user profiles
app.get('/instagram/:username', (req, res) => {
    const username = req.params.username;
    res.render('insta', { username });
});

app.get('/animal_ig/:username',(req,res)=>{
    let {username} = req.params;
    const InstaData=require('./data.json');
    const profile=InstaData[username];
    if (!profile) {
        return res.status(404).send('Profile not found');
    }
    res.render('animal_insta',{profile});
});
