/* eslint-disable react/prop-types */
import Details from "./Details";

export default function DetailsGrid({current , location}){
    return(
        <div className="col-lg-8 col-md-12 row align-items-start justify-content-center">
          <h5 className="mb-5">{location.name} , {location.region} {location.country}</h5>
          <Details title="Visibility" content= {`${current.vis_km} Km`}/>
          <Details title="Humidity" content={`${current.humidity} %`}/>
          <Details title="Wind" content={`${current.wind_mph} mph`}/>
          <Details title="Wind direction" content={current.wind_dir}/>
          <Details title="Gust" content={`${current.gust_mph} mph`}/>
          <Details title="UV index" content={current.uv}/>
          <Details title="Pressure" content={`${current.pressure_mb} mb`}/>
          <Details title="Heat index" content={current.heatindex_c}/>
          <Details title="Cloud" content={current.cloud}/>
        </div>
    )
}