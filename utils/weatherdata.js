const request=require("request");
const constants=require("./config");

const weatherData=(address,callback)=>{
    const url=constants.openweathermap.base_url+ encodeURIComponent(address)+"&appid="+constants.openweathermap.secret_key;

    request({url,json:true},(error,{body})=>{
        
        if(error){
            callback("can't fetch data from open weather map api!",undefined);
        }else if(!body.main || !body.main.temp || !body.name || !body.weather){
            callback("location does not exist ,try another location please",undefined);
        }
        else{
            callback(undefined,{
                temperature:body.main.temp,
                description:body.weather[0].description,
                cityName:body.name
            })
        }
    });
}

module.exports = weatherData;

