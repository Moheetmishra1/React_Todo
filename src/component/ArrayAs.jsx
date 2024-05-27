import { useState } from "react"

export default function ArrayAs(){

let favColors = ["red","blue" ,"green","purple","black","orange"]

let [color,setcolors]= useState([]);


let addColor=()=>{
    if(color.length !== favColors.length){
    color.push(favColors[color.length]);
    setcolors([...color]);
    }
}


return (
    <div>
    <ul>
        {
            color.map((color,index)=>{
                return <li key={index}>
                    {color}
                </li>
            })
        }
    </ul>
    <button onClick={addColor}>Add Color</button>


    </div>
)


}