
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [countryData, setCountryData] = useState([])

  const fetchFlag = async () => {
    try{
      const rawdata = await fetch(`https://xcountries-backend.azurewebsites.net/all`)
      const data = await rawdata.json();
      return data;
    }catch (e){
      console.error(e)
    }
   
  }


  useEffect(()=>{
   const response = async () => {
     const country = await fetchFlag()
     setCountryData(country)
   }
    response()
   
  },[])



  
  return (
    <div className="App">
      <h1>Krushna</h1>
     
      <div className='container' >
        {countryData.map((ele)=> (
          <div className='element' key={ele.abbr}>
            <img src={ele.flag} alt={ele.name} loading='lazy'/>
            <h1>{ele.name}</h1>
        </div>))}
      </div>
    </div>
  );
}

export default App;
