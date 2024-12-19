

let button=document.getElementById('btn')

button.addEventListener('click',()=>{
    let userInput=document.getElementById('serch').value
    let api = '094b1cddc40a67c426c17b4f56de2b4d';
    console.log(userInput);
    
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${api}&units=metric`)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);
    
    // console.log(data.main.temp);
    
    let cityname=document.getElementById('cityname')
    cityname.textContent=data.name


    let clceus=document.getElementById('clceus')
    clceus.textContent=data.main.temp + `c`


    
    let wind=document.getElementById('wind-text')
    wind.textContent=data.wind.speed + `m/s`

    let humidity=document.getElementById('humidity-text')
    humidity.textContent=data.main.humidity + `%`

    
    let visibility=document.getElementById('visibility-text')
    visibility.textContent=data.visibility

    let skydetails=document.getElementById('skydetails')
    skydetails.textContent=data.weather[0].description

   })
    
})

