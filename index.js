const express = require('express');
const app = express();
//cookie parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setting up static files and view engine
const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); //serving static files from public directory
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
    res.render("index");
});
//dynamic routing
app.get("/author/:username", (req, res) => {
    res.send(`welcome,${req.params.username} of {req.params.age  }`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); //server is listening on port 3000