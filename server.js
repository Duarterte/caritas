const express = require('express')
const app = express();
const path = require('path')
const fullPath = path.join(__dirname, '/public', '/index.html')
const api = path.join(__dirname, '/public', '/api.html')


app.use("/static", express.static(__dirname+'/public/static'));

app.get("/",(req, res)=>{
    res.sendFile(fullPath)
});
app.get("/api",(req, res) => {
    res.sendFile(api)
}) 

app.listen(3001)