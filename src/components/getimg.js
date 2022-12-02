import React from "react";


function Getimage(id_of_img){
console.log(id_of_img)
let array_of_id=[300,499,599,699,799,800,801,805]
let array_of_image=["./img/storm.svg","./img/drizzle.svg","./img/rain.svg",
"./img/snow.svg","./img/fog.svg","./img/clear.svg","./img/partlycloudy.svg","./img/mostlycloudy.svg"]
let flag=1
let source_of_image=""




let final= array_of_id.map((item,ind)=>{

    if(id_of_img <= item  ){
        if(flag===1)
        source_of_image=array_of_image[ind]
        
        flag=0
        return "111"
    }
})

        return source_of_image

}
export default Getimage