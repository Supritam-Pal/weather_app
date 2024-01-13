import React , {useState} from 'react'
import axios from 'axios';

const App = () => {
    const [data,setData] = useState({});
    const [location,setLocation] = useState("")
  //const url =`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=f38eb1b50f2e5fa85215cca47aa3edf1`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=f38eb1b50f2e5fa85215cca47aa3edf1`

  const searchLocation = (e) =>{
   if(e.key === "Enter"){
    axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }


  return (
    <div className='app'>
    <div className='search'>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
      />
    </div>
      <div className='container'>

        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp}°F</h1> : null }
            
          </div>
          <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
            <p>Clouds</p>
          </div>
         </div>
                 
             <div className='bottom'>
              <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                <p>Feels like</p>
              </div>
              <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>20%</p></div>
              <div className='wind'>
                 <p>12MPH</p> <p>Wind's Speed</p> 
              </div>
             </div>
      </div>
      
    </div>
  )
}

export default App

