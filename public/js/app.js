console.log("js file is loaded")


const weatherForm = document.querySelector('form')
const city = document.querySelector('input')
const msg = document.querySelector('#msg-1')


weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()
  
    fetch('http://localhost:3000/weather?country=india&city='+city.value).then((response)=>{

    response.json().then((data)=>{

        console.log(data.temp)
    msg.textContent = data.temp
})

})

})