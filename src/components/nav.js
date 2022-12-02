import React,{useState} from "react";
import FetchApi from "../Utils/For_Fetch";
import './nav.css'


function Navbar({hand}){
    
    const[name,setname]=useState("")
    let tname=""
    function onwrite(e){
        console.log(e.target.value)
        setname(e.target.value)
    }

    function onnSubmit(e){
        e.preventDefault();
        hand(name)
    }

    // function send(){
    //     console.log("nnnnnnnn")
    //     hand(name)
    // }

    return(
        <div>
            <form action="" onSubmit={onnSubmit} className="formm" >
                
                <input type="text" placeholder="City" onChange={onwrite} className="hhh"  />
                
                
                <button type="submit" className="btn "> Find Weather </button>
            </form>
        </div>
    )

}
export default Navbar