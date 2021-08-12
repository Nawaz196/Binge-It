import React,{useState,useContext} from 'react'
import { reducer } from './Reducer'
import { usercontext } from './App'

function Test() {

    const {state,dispatch} = useContext(usercontext);
    const [text, setText] = useState("");
    
    const handlechange = (e)=>{
        e.preventDefault();
        console.log("Im handlechange");
        dispatch({type : "two" , payload:text});
        setText("");
        <p>{state}</p>
    }

    return (
        <div>

        {/* <p>{state}</p> */}

        <form onSubmit={handlechange}>
            <input type="text" onChange= {(e)=>{setText(e.target.value)}} />
            <p>{state}</p>
            <button type="submit"  >submit</button>
        </form>

        
            
        </div>
    )
}

export default Test
