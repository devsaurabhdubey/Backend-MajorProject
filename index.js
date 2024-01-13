const express = require("express");
const app = express();

const port = 8000;

app.listen(port,(err)=>{
    if(err)
    {
        console.log(`there is error in running the server : ${err}`);
        return;
    }
    console.log(`the server is up and running on port number : ${port}`);
})