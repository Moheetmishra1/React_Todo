import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './Todo/TodoApp'
// import Student from './component/Student'
// import ArrayAs from './component/ArrayAs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Pracimport React, { useState } from 'react' 
 
import "./TodoApp.css" 
     
export default function TodoApp() { 
 
 
    let fruits=[] 
 
  
    return ( 
        <section> 
             
            <div className="add-item"> 
                <input type="text" placeholder='Add Item' /> 
                <button>Add</button> 
            </div> 
            <div className="items"> 
                {fruits.map((fruit,id) => 
                { 
                    return <div className="item"> 
                        <div className="item-name">{fruit}</div> 
                        <button>Delete</button> 
                    </div> 
            })} 
            </div> 
           
       </section> 
   ) 
   
} 
 
export default TodoApptice</h1> */}
    {/* <Student/> */}
    {/* <ArrayAs /> */}
    <TodoApp />

    </>
  )
}

export default App
