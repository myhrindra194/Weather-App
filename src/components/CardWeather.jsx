/* eslint-disable react/prop-types */
import { InputGroup, Input, Button } from "reactstrap";

export default function CardWeather({inputValue, setInputValue, handleSubmit, location, current}){
    return (
        <div className="col-lg-4 col-md-12 rounded">
            <InputGroup className="mb-5">
                <Input placeholder="City" className="rounded" value={inputValue} onChange={setInputValue}/>
                <Button color="primary" onClick={handleSubmit} disabled={inputValue.trim().length === 0}>Search</Button>
            </InputGroup>
            <div className="text-center">
                <img src={current.condition.icon} alt="Image" className="img-fluid" width={100} height={100}/>
                <h1>{current.temp_c} °C</h1>
                <h3 className="text-muted">{  current.condition.text}</h3>
                <p className="mt-5 fw-bold">{location.localtime}</p>
            </div>
            <div className="p-3 mt-5">
                <p>Time zone: {location.tz_id}</p>
                <p>Longitude: {location.lon} </p>
                <p>Latitude: {location.lat}</p>
            </div>
      </div>

    )
}