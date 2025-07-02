const apiKey="88acb25ff889f55f1bb932ca9a8161fa";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(" #btn")

async function checkWeather(city){
    const response=await fetch(apiURL+city+`&appid=${apiKey}`);
var data=await response.json();
console.log(data);
if(data.name===undefined){
    document.querySelector(".city").innerHTML="Can't find the city"
    document.querySelector(".temp").innerHTML="Nil";
    document.querySelector(".humidity").innerHTML="-"
document.querySelector(".wind").innerHTML="-"
}
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

}
searchBtn.addEventListener("click",()=>{

checkWeather(searchBox.value);
}
)





