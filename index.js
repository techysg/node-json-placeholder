const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());



//ROUTES
app.get('/', (req, res) => {
    res.send('This is Home Page')
});


//Import Routes
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/users', require('./routes/users'));
app.use('/todos', require('./routes/todos'));
app.use('/albums', require('./routes/albums'));
app.use('/photos', require('./routes/photos'));




//How to listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT,function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})







