import React, { useEffect, useRef, useState } from 'react'
import search from '../assets/images/search.png'
import clear from '../assets/images/clear.png'
import clouds from '../assets/images/clouds.png'
import humidity from '../assets/images/humidity.png'
import mist from '../assets/images/mist.png'
import rain from '../assets/images/rain.png'
import drizzle from '../assets/images/drizzle.png'
import snow from '../assets/images/snow.png'
import wind from '../assets/images/wind.png'
function Weather() {
    // const[input,setinput]=useState("")
    const inputref=useRef()
    // const[err,seterr]=useState(true)

    const[wea,setwea]=useState(true)
   
    const apikey="82591cbeaa0fce17f59e2d0131eedac1"
const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    async function checkweather(city){
        try {
          
            
            const response= await fetch(api +  city + `&appid=${apikey}`); 
            const data= await response.json()
            // if(response.status==404){
            //     document.getElementsByClassName('weather').style.display="block"
            //     // document.querySelector(".weather").style.display="none"
            
           
             
            
            // }
            if (city==='') {
                alert("please enter a city name")
                
            }
            // else if (data.cod=='404') {
            //     seterr(true)
            // }
    setwea({
        humiditys:data.main.humidity,
        tempe:  Math.floor(data.main.temp ),
        wind:data.wind.speed,
        location:data.name,
        image:data.weather[0].icon,
        desc:data.weather[0].description
        
    });
        } catch (error) {
            setwea(false)
            console.log(error);
            
        }
     

     
    }
    useEffect(()=>{
        checkweather(inputref)
       
        
    },[])
     
  return (
    <>
    <div className='weather'>
<div className="search">
    <input  ref={inputref} type="text"  placeholder='Search here'/>
    <img src={search}  onClick={()=>checkweather(inputref.current.value)} alt="" />
    <p className="id"></p>
</div>

{wea? 
<>


{/* {err?<div>
    <p>city not found</p>
</div>:""} */}

<div>
    <img src={wea.image=="02d"? clouds:"err"} alt="" className='icon' />
    <img src={wea.image=="02n"? clouds:"err"} alt="" className='icon' />
    <img src={wea.image=="03d"? clouds:"err"} alt="" className='icon' />
    <img src={wea.image=="03n"? clouds:"err"} alt="" className='icon' />
    <img src={wea.image=="01d"? clear:"err"} alt="" className='icon' />
    <img src={wea.image=="01n"? clear:"err"} alt="" className='icon' />
    <img src={wea.image=="04d"? drizzle:"err"} alt="" className='icon' />
    <img src={wea.image=="04n"? drizzle:"err"} alt="" className='icon' />
    <img src={wea.image=="09d"?rain :"err"} alt="" className='icon' />
    <img src={wea.image=="09n"? rain:"err"} alt="" className='icon' />
    <img src={wea.image=="10d"?rain :"err"} alt="" className='icon' />
    <img src={wea.image=="10n"?rain :"err"} alt="" className='icon' />
    <img src={wea.image=="13d"?snow :"err"} alt="" className='icon' /> 
    <img src={wea.image=="13n"?snow :"err"} alt="" className='icon' /> 
    <img src={wea.image=="50d"?mist :"err"} alt="" className='icon' /> 
    <img src={wea.image=="50n"?mist :"err"} alt="" className='icon' /> 
<div className="weather-name">
<p>
{wea.desc}

</p>

</div>
</div>

        {/* <img src={wea.image.main==="Clear"? clear:""   } /> */}
       
<p className="temp">{wea.tempe}°C</p>
<p className="location">{wea.location}</p>
<div className="weather-data">
    <div className="colom">
        <img src={humidity} alt="" />
        <div>

    <p>{wea.humiditys}%</p>
    <span>Humidity</span>
        </div>
    </div>
    <div className="colom">
        <img src={wind} alt="" />
        <div>
    <p>{wea.wind}km/h</p>
    <span>wind</span>

        </div>
    </div>
</div>

</>:<><div>
    <p className='city' >Please Enter the city </p>
    </div></>}

    </div>
    </>
  )
}

export default Weather