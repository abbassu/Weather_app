import React from "react";


function FetchApi(url){

//   one--
    // return fetch(url).then(async(resp)=> {
    // return{
    //     data: await resp.json(),
    // }
    // })

//   two--
    return fetch(url).then((resp)=> resp.json()).then(re =>re)

}

export default FetchApi