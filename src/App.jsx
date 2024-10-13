import { useEffect, useState } from "react";
import { Input, InputGroup, Button, Spinner,  } from "reactstrap";
import DetailsGrid from "./components/DetailsGrid";

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

  const location = data.location;

  return (data.length === 0) ?
  (
    <Spinner />
  ):
  (
    <div className="container py-5">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-4 col-md-12 rounded">
          <InputGroup className="mb-5">
            <Input placeholder="City" className="rounded" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Button color="primary" onClick={(e) => handleSubmit(e)} disabled={inputValue.trim().length === 0}>Search</Button>
          </InputGroup>
          <div className="text-center">
            <img src={data.current.condition.icon} alt="Image" className="img-fluid" width={100} height={100}/>
            <h1>{data.current.temp_c} °C</h1>
            <h3 className="text-muted">{data.current.condition.text}</h3>
            <p className="mt-5 fw-bold">{location.localtime}</p>
          </div>
          <div className="p-3 mt-5">
            <p>Time zone: {location.tz_id}</p>
            <p>Longitude: {location.lon} </p>
            <p>Latitude: {location.lat}</p>
          </div>
        </div>
        <DetailsGrid current= {data.current} location={location}/>
      </div>
    </div>
  )
}

export default App