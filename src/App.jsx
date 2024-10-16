import { useEffect, useState } from "react";
import { Spinner,  } from "reactstrap";
import DetailsGrid from "./components/DetailsGrid";
import CardWeather from "./components/CardWeather";

function App(){
  const [city, setCity] = useState("Antananarivo");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=> {
    let URL = `https://api.weatherapi.com/v1/current.json?key=4cc70a4a42c54c12add140506241310&q=${city}`;

    fetch(URL)
    .then(response => {
      if (!response.ok) 
        throw new Error('City not found');
      return response.json()
    })
    .then(data => setData(data))
    .catch(error => {console.error("Error while fetching data", error);
    })

  }, [city])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue("");
  }

  const handleKeyPress = (e) => {
    if(e.key == "Enter"){
      setCity(inputValue);
      setInputValue("")
    }
  }


  return (data.length === 0) ?
  (
    <div className="container py-5">
      <div className="d-flex justify-content-center align-items-center"><Spinner/></div>
    </div>
  ):
  (
    <div className="container py-5">
      <div className="row d-flex justify-content-between align-items-center">
        <CardWeather 
          inputValue={inputValue} 
          setInputValue={e => setInputValue(e.target.value)} 
          handleSubmit={e => handleSubmit(e)} 
          handleKeyPress={(e) => handleKeyPress(e)}
          location={data.location} 
          current={data.current}
        />
        <DetailsGrid 
          current= {data.current} 
          location={data.location}
        />
      </div>
    </div>
       
  )
}

export default App