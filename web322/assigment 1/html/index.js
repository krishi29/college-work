const express =require("express");
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');


const express = require("express");
const exphbs=require('express-handlebars');
const bodyParser=require('body-parser');

//creation of app object

const app=express();


//handlebars middleware

app.engine('handlebars',exphbs());

//handlebars middleware

app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

//body parser middleware

app.use(bodyParser.urlencoded({extended:false}))

//loading static assets middleware

app.use(express.static("public"));

//loading static assets middleware

app.use(express.static("public"));

app.get("/",(req,res)=>{
        res.render("home",{
            title:"home page"
        })
});

app.get("/about-us",(req,res)=>{
    res.render("about",{
        title:"about me page"
    })
});

app.get("/contact us",(req,res)=>{
    res.render("contact",{
        title:"contact me"
    })
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log('web server');
})