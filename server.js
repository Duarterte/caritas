const express = require('express')
const app = express();
const path = require('path')
const fullPath = path.join(__dirname, '/public', '/index.html')

app.use("/static", express.static(__dirname+'/public/static'));

app.get("/",(req, res)=>{
    res.sendFile(fullPath)
});


app.listen(3001)