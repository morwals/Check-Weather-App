require('dotenv').config();

const express =require("express");
const dotenv=require("dotenv");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();
const weatherData=require("./utils/weatherdata");


app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index",{title: "Weather App",header:"Weather App"});
});

app.get("/weather",function(req,res){
    const address=req.query.address;
    weatherData(address,(error,{temperature,description,cityName}={})=>{
        if(error){
            return res.send({error});
            console.log("opps error aa gya :/");
        }
        console.log(temperature , description ,cityName);

        res.send({
            temperature,
            description,
            cityName
        });
    });
});



app.listen(3000);