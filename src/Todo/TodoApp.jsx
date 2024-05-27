import React, { useState } from 'react' 
 
import "./Todo.css" 


     
export default function TodoApp() { 
 
 
    
    let [fruit,setfruit] = useState({fruitinput:"",searchFruit:""})
    let [fruitList,setfruitList]=useState([])
    let [store,setstore] =useState([]);




    function addinput({target:{name,value}}){
        
        setfruit({...fruit,[name]:value});
        
    }

    function addFruit(){
        if(fruit.fruitinput !==""){
            
        setfruitList([...fruitList,fruit["fruitinput"]])
        }
    }

    function deleteFruit({target:{value}}){
        

        setfruitList(fruitList.filter((a,index)=>{
            return index != value ?true:false;
            
        }))
    }

    function search(){
        setstore([...fruitList])

        setfruitList(fruitList.filter((a,index)=>{
            return a == fruit["searchFruit"] ?true:false;
            // return a.includes(fruit)
            
        }))
    }

    function list(){
        setfruitList([...store])
        
    }

 
  
    return ( 
        <section> 
             
            <div className="add-item"> 
                <input type="text" placeholder='Add Item' name="fruitinput" onChange={addinput} /> 
                <button onClick={addFruit}>Add</button> 
            </div>
            <div className="add-item"> 
                <input type="text" placeholder='Search Item' name="searchFruit" onChange={addinput} /> 
                <button onClick={search}>Search</button>
                
            </div>
            <div className="add-item"> 
                {/* <input type="text" placeholder='Add Item' onChange={add} />  */}
               <button onClick={list}>ALL</button>              
                
            </div>
            

            <div className="items"> 
                {fruitList.map((fruit,id) => 
                { 
                    return <div key={id} className="item"> 
                        <div className="item-name" >{fruit}</div> 
                        <button onClick={deleteFruit} value={id}>Delete</button> 
                    </div> 
            })} 
            </div> 
           
       </section> 
   ) 
   
} 
 