
const request = require("request")

const weatherdata = (city,callback) =>{

    const url = "http://api.weatherstack.com/current?access_key=8e55056f2a313d61ecc11be4108ba761&query="+ city
    request({url:url,json:true},(error,response )=>{

        if(error)
        {
         callback("!! Something went wrong ... Check your network connection!!")
      }else if(response.body.error)
      {
          callback("Please check location!!")
      }else
      callback(response.body.current)
    })
}

module.exports = {
    weatherdata
}
