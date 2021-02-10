const express = require('express');
const app = express();
const port = 8081;

app.use(express.static(__dirname+'/public'));


app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/public/index.html')
});

app.listen(port,()=>{
console.log(`servidor aberto em: http://localhost:${port}`);
})
