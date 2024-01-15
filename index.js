const express = require("express");
const app = express();

const expressLayouts = require("express-ejs-layouts");

const port = 8000;

app.use(express.static("./assets"));
app.use(expressLayouts);

//extract styles and scripts from subpages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//use express router
app.use('/', require('./routes'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`there is error in running the server : ${err}`);
        return;
    }
    console.log(`the server is up and running on port number : ${port}`);
})