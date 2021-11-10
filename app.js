const http = require('http');

const express=require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:false}))

app.use(`/add-product`,(req, res, next) => {
   
    res.send( `<form action="/product" method="POST"><input type="text" name="title" placeHolder="product"><input type="number" name="size" placeHolder="size"><button type="submit" value="">add product</button></form>`)
})
app.use(`/product`,(req, res, next) => {
    console.log(req.body);
    res.redirect(`/`)
})
app.use(`/`,(req, res, next) => {
    
    res.send(`<h1>hellow from home</h>`)
})
app.listen(3000)