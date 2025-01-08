
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [countryData, setCountryData] = useState([])

  useEffect(()=>{
   const fetchCountry = async () => {
    try{
      const response = await fetch(`https://xcountries-backend.azurewebsites.net/all`);
      const data = await response.json();
      setCountryData(data);
    }catch(e){
      console.error("Error fetching data:", e);
    }
   }
   fetchCountry()
  },[])



  
  return (
    <div className="App">
      <h1>Krushna</h1>
     
      <div className='container' >
        {countryData.map((ele,i)=> (
          <div className='element' key={i}>
            <img src={ele.flag} alt={ele.name} loading='lazy'/>
            <h1>{ele.name}</h1>
        </div>))}
      </div>
    </div>
  );
}

export default App;
