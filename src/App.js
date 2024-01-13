import React , {useState} from 'react'
//import axios from axios;

const App = () => {

  //const url =`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=f38eb1b50f2e5fa85215cca47aa3edf1`
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=f38eb1b50f2e5fa85215cca47aa3edf1`
  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
              <h1>60F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
         </div>
                 
             <div className='bottom'>
              <div className='feels'>
                65F
              </div>
              <div className='humidity'><p>20%</p></div>
              <div className='wind'>
                  12MPH
              </div>
             </div>
      </div>
      
    </div>
  )
}

export default App

