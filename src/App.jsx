import { useEffect, useState } from "react";
import { Spinner,  } from "reactstrap";
import DetailsGrid from "./components/DetailsGrid";
import CardWeather from "./components/CardWeather";
import { fetchData } from "./utils/fetchData";

function App(){
  const [city, setCity] = useState("Antananarivo");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let URL = `https://api.weatherapi.com/v1/current.json?key=4cc70a4a42c54c12add140506241310&q=${city}`;

    fetchData(URL).then(data => setData(data))
  }, [city])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue("");
  }

  const handleKeyDown = (e) => {
    if(e.key == "Enter"){
      setCity(inputValue);
      setInputValue("")
    }
  }


  return (data.length === 0) ?
  (
    <div className="container py-5 h-100">
      <div className="d-flex justify-content-center align-items-center"><Spinner/></div>
    </div>
  ):
  (
    <div className="container py-5">
      <div className="row d-flex justify-content-between align-items-center mt-3">
        <CardWeather 
          inputValue={inputValue} 
          setInputValue={e => setInputValue(e.target.value)} 
          handleSubmit={e => handleSubmit(e)} 
          handleKeyPress={(e) => handleKeyDown(e)}
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