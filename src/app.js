const express = require("express")
const app = express()
const path = require('path')
const hbs = require('hbs')
const weather= require("./utils/forecast.js")
const { response } = require("express")


//define path for express config
const proot = path.join(__dirname , '../public') 
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')


//setup handlerbar and view location

app.set("view engine","hbs")
app.set('views',viewPath)

hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(proot))

app.get('',(req,res)=>{

    res.render("index",{
        name:"shubham",
        age:"24"
    })
})

app.get('/about',(req,res)=>{

    res.render("about",{
        name:"shubham",
        age:"24",
        sex:"male"
    })
})

app.get('/help',(req,res)=>{
    res.render("help",{
        msg:"we are not going to help you",
        name:"shubham"
    })
})



app.get('/weather',(req,res)=>{

    if(!req.query.country)
    return res.send({
        "error" : "please provide address"
    })
    city = req.query.city;
    weather.weatherdata(city,(response)=>{

        temp = response
        res.send({
        
       
            "country":req.query.country,
             "city":req.query.city,
             "temp":temp.temperature
            })
        
    })

   
   
})

app.get('*',(req,res)=>{

    res.render('404',{msg:"sorry this page does'nt exist !!"})
})

app.listen(3000,()=>{

    console.log("Server up - runing at 3000")
})