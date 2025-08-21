const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();      
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));   



let posts = [
    {
        id:uuidv4(),
        username: 'Swayam',
        content: 'Heyya PhonePe!'
    },
    {
        id:uuidv4(),
        username: 'Shivam',
        content: 'I Love kohli!'
    },
    {
        id:uuidv4(),
        username: 'Siddharth',
        content: 'Life is so good!'
    },
];




app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;  
    let newcontent = req.body.content;
    let post = posts.find(p => p.id == id);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    post.content = newcontent;
    console.log(`Post with id ${id} updated with content: ${newcontent}`);

    res.redirect('/posts'); // better UX: redirect to posts instead of plain text
});




app.get('/posts', (req, res) => {
  res.render("index",{posts});
});



app.get('/posts/new', (req, res) => {
  res.render("new");
});



app.post('/posts', (req, res) => {
    let {username,content} = req.body;
    let id=uuidv4();
    posts.push({id,username, content});
    console.log(req.body);
    //to redirect to the posts page after submitting the form
    res.redirect('/posts');
    // res.send("Post received!");
});



app.get('/posts/:id', (req, res) => {
    let {id}=req.params;
    let post = posts.find(p => p.id == id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    console.log(post);  
    res.render("show", {post});
});


app.get('/posts/:id/edit', (req, res) => {
    let {id} = req.params;
    let post = posts.find(p => p.id == id);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    res.render("edit", {post});
});  

app.delete('/posts/:id', (req, res) => {
    let {id} = req.params;  
    let post=posts.find(p => p.id == id);
    if (!post) { 
        return res.status(404).send('Post not found');
    }
    posts = posts.filter(p => p.id != id); // remove the post from the array
    res.redirect('/posts'); // redirect to posts page after deletion
});
//basic server running and homepage routing
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

