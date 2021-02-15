const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;

//css
app.use(express.static(__dirname+'/public'));

//paths
app.get('/', (req, res) =>{
    res.sendFile(__dirname+'/public/views/index.html')
});
app.get('/products', (req, res) =>{
    res.sendFile(__dirname+'/public/views/products.html')
});
app.get('/services', (req, res) =>{
    res.sendFile(__dirname+'/public/views/services.html')
});
app.get('/contact', (req, res) =>{
    res.sendFile(__dirname+'/public/views/contact.html')
});
app.get('/about', (req, res) =>{
    res.sendFile(__dirname+'/public/views/about.html')
});

//server listener
app.listen(PORT,()=>{
console.log(`servidor aberto em: http://localhost:${port}`);
})
