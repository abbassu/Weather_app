import React,{useEffect, useState} from "react";
import Getimage from "./getimg";

function Arrofweather  ({response}){

let array_of_card=response.list.slice(1, 8)
return(
    <div className="parentofcard">
  <div className="card">
{array_of_card.map((ele,ind)=>{

    let s=Getimage(array_of_card[ind]?.weather[0]?.id)
    let date= new Date(array_of_card[ind]?.dt_txt).getHours()
    return(
        <div key={ind} className="hour" >
                <div className="incard">
                    { date >= 12 ? `${date}:00` : `0${date}:00` }
                </div>
            <div className="img_of_weather2">
                <img src={s} alt="" />
            </div>
            <div className="incard">{`${Math.ceil( array_of_card[ind]?.main?.temp_min)}°C`}</div>
        </div>
    )
})}
    </div>
    </div>
  
)
}

export default Arrofweather