import React,{useState,useEffect} from "react";
import Getimage from "./getimg";
import "./temp.css"








function Tempnow({response}){

    const [weatherm,setw]=useState(response)
    const [m,sm]=useState(0)
    
    const [s_min,setmin]= useState(0)
    const [s_max,setmax]= useState(0)
    const [s_humidity,sethumidity]=useState(0)
    const [s_pressure,setpressure]=useState(0)
    const [description,setdescription]=useState(0)
    const [id_for_img,set_id_for_img]=useState()

    let s=Getimage(response?.list[0]?.weather[0].id)
    console.log(" in inini ",s)


    useEffect(()=>{
        setmin(Math.ceil(response?.list[0]?.main.temp_min)-1)
        setmax(Math.ceil(response?.list[0]?.main.temp_min))
        sethumidity(response?.list[0]?.main.humidity)
        setpressure(response?.list[0]?.main.pressure)
        setdescription(response?.list[0]?.weather[0].description)
        set_id_for_img(Getimage(response?.list[0]?.weather[0].id))

    },[response])

// console.log(" in ininirrrrr ",id_for_img)

    // let falg=0;
    // let mint=0;
    // let maxt=0;
    // let humidity=0;
    // let pressure=0;

    // const d = new Date();
    // function sets(){
    // if(response.cod === "200"){
    //     console.log(Math.ceil(response?.list[1]?.main.temp_max))
    //     console.log(Math.ceil(response?.list[1]?.main.temp_max)+1,'1')

    //     mint=Math.ceil(response?.list[1]?.main.temp_min)-1
    //     maxt=Math.ceil(response?.list[1]?.main.temp_max);
    //     humidity=response?.list[1]?.main.humidity
    //     pressure=response?.list[1]?.main.pressure
    //     ff()
    //     // console.log(`${mint}°C`)
    //     // console.log(h)
    //     // ss(response?.list[1])
    // }
    // }

    // function ff(){
    //     console.log("3333",mint)
    //     console.log(maxt)
    //     console.log(humidity)
    //     console.log(pressure)
    //     // sm(mint)
    // }

 let b= "./img/mostlycloudy.svg"

    return(
        <div>
            { response.cod=== "400"? "" : 
            <div>
<div className="forw">
<div className="img_of_weather" >
                    
                    <img src={id_for_img} alt="" />
    
                    </div>
</div>

                <div>
                    <strong className="lea">
                    {description}
                        </strong>
                </div>
                <div>
                    <strong className="coll">
                    Tempreature
                    </strong>
                    

                    <span className="mintt">
                        {/* {`    ${Math.ceil(response?.list[0]?.main.temp_min)-1}° `} */}
                        {`    ${s_min-1}° `}
                    </span>
                    <strong className="coll">to</strong>
                    
                    <span className="maxtt">
                        {/* {` ${Math.ceil(response?.list[0]?.main.temp_max)}°C`} */}
                        {` ${s_max}°C`}
                    </span>
                </div>
            <div>
                <span>
                    <span className="inbigform coll" >Humidity</span>
                    {s_humidity}%
                </span>
                <span className="inbigform coll" >Pressure</span>
                <span >
                    {s_pressure}
                </span>
            </div>
            </div>
}
        </div>
        )
}

export default Tempnow