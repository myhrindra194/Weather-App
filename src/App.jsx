import { useEffect, useState } from "react";
import { Spinner,  } from "reactstrap";
import DetailsGrid from "./components/DetailsGrid";
import CardWeather from "./components/CardWeather";
import CenterDiv from "./components/CenterDiv";

function App(){
  const [city, setCity] = useState("Antananarivo");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=> {
    let URL = `https://api.weatherapi.com/v1/current.json?key=4cc70a4a42c54c12add140506241310&q=${city}`;

    fetch(URL)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => {console.error("Error while fetching data", error);
    })

  }, [city])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue.trim());
    setInputValue("");
  }


  return (data.length === 0) ?
  (
    <CenterDiv><Spinner /></CenterDiv>
  ):
  (
    <CenterDiv>
       <CardWeather 
          inputValue={inputValue} 
          setInputValue={e => setInputValue(e.target.value)} 
          handleSubmit={e => handleSubmit(e)} 
          location={data.location} 
          current={data.current}
        />
        <DetailsGrid 
          current= {data.current} 
          location={data.location}
        />
    </CenterDiv>
  )
}

export default App