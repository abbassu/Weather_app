import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';
import FetchApi from './Utils/For_Fetch';
import Navbar from './components/nav';
import Tempnow from './components/temp';
import Arrofweather from './components/arr_weather';

function App() {

  const [weth,setweth]=useState("")
  const [city,setcity]=useState("")
  

  async function getfetche(){
  const resp= await FetchApi(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=8262bf24ec10f2f145746cdfd3d68631`)
  console.log("aaaa",resp)
      setweth(resp)
  }

  useEffect( () => {
    getfetche()
  }, [city]);

  function pass(value){
    setcity(value)
  }

  return (
    <div className="App">

      <Navbar hand={pass}/>
      <div className='secondcomponent'>
      {weth === "" ? "1" :
      weth.cod ==="400"   ? "":
      weth.cod ==="404"? <div> <h1>There Is No City With This Name 
        </h1> </div>:
      <div>
        <Tempnow response={weth}/>
        <Arrofweather response={weth}/>
      </div>
      }
      
      </div>

      <div className='gaza'> <strong>Gaza</strong>  Sky <strong>Geeks</strong>  </div>
    </div>
  );
}

export default App;
