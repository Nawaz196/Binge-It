import React, { useState,useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { usercontext } from "./App";
import Movies from "./Movies";
import { reducer } from "./Reducer";





const Form = () => {

  const {state, dispatch} = useContext(usercontext);

  var fil = {
    hindi: false,
    telugu: false,
    english: false,
    tamil: false,
    kannada: false,
    malayalam: false,
  };

  const handlechange = (e)=>{
    //e.preventDefault();
    if(e === "hindi")
    {
        fil.hindi = !fil.hindi;
        if(fil.hindi)
        {
            dispatch({type : "hindiadd"});
        }
        else
        {
            dispatch({type : "hindiremove"});
        }
    }

    if(e === "telugu")
    {
        fil.telugu = !fil.telugu;
        if(fil.telugu)
        {
            dispatch({type : "teluguadd"});
        }
        else
        {
            dispatch({type : "teluguremove"});
        }
    }

    if(e === "tamil")
    {
        fil.tamil = !fil.tamil;
        if(fil.tamil)
        {
            dispatch({type : "tamiladd"});
        }
        else
        {
            dispatch({type : "tamilremove"});
        }
    }

    if(e === "kannada")
    {
        fil.kannada = !fil.kannada;
        if(fil.kannada)
        {
            dispatch({type : "kannadaadd"});
        }
        else
        {
            dispatch({type : "kannadaremove"});
        }
    }

    if(e === "malayalam")
    {
        fil.malayalam = !fil.malayalam;
        if(fil.malayalam)
        {
            dispatch({type : "malayalamadd"});
        }
        else
        {
            dispatch({type : "malayalamremove"});
        }
    }

    if(e === "english")
    {
        fil.english = !fil.english;
        if(fil.english)
        {
            dispatch({type : "englishadd"});
        }
        else
        {
            dispatch({type : "englishremove"});
        }
    }

  }

  

  

  

  return (
    <form>
      <label>
        Hindi
        <input
          type="checkbox"
          onClick={() => {
            handlechange("hindi");
          }}
        />
      </label>
      <br />

      <label>
        Telugu
        <input
          type="checkbox"
          onClick={() => {
            handlechange("telugu");
          }}
        />
      </label>
      <br />

      <label>
        English
        <input
          type="checkbox"
          onClick={() => {
            handlechange("english");
          }}
        />
      </label>
      <br />

      <label>
        Kannada
        <input
          type="checkbox"
          onClick={() => {
            handlechange("kannada");
          }}
        />
      </label>
      <br />

      <label>
        Malayalam
        <input
          type="checkbox"
          onClick={() => {
            handlechange("malayalam");
          }}
        />
      </label>
      <br />

      <label>
        Tamil
        <input
          type="checkbox"
          onClick={() => {
            handlechange("tamil");
          }}
        />
      </label>
      <br />

      <Link to="/movies">Submit</Link>
      
    </form>
  );

  
};



function Welcome() {
  return (
    <Router>
        <div>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <Switch>
            <Route path="/form">
              <Form />
            </Route>

            <Route path="/movies">
              <Movies />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default Welcome;


