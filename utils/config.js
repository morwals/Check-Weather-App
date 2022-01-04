const dotenv=require("dotenv");
dotenv.config({path:"config.env"});

const constants={
    openweathermap:{
        base_url:"https://api.openweathermap.org/data/2.5/weather?q=",
        secret_key:""+process.env.SECRET_KEY+""
    }
}

module.exports = constants;