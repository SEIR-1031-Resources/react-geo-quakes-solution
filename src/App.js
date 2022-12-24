import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

import Map from './components/QuakeMap'
import List from './components/Quakes'

function App() {
  const [quakes,setQuakes] = useState([])
 
  useEffect(()=>{
    async function getData (){
      const latestQuakes = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
      setQuakes(latestQuakes.data.features)
    }
    getData()
  },[])
  
  return (
    <div className="app">
      <div className="mapContainer">

          <Map quakes={quakes}/>
   
      </div>
      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <List quakes={quakes}/>
      </div>
    </div>
  );
}

export default App;
