import React, { useState, useContext } from "react";
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
  const { state, dispatch } = useContext(usercontext);


  var fil = {
    hindi: false,
    telugu: false,
    english: false,
    tamil: false,
    kannada: false,
    malayalam: false,
    thriller: false,
    romance: false,
    mystery: false,
    horror: false,
    fantasy: false,
    drama: false,
    crime: false,
    comedy: false,
    adventure: false,
    action: false,
  };

  const handlechange = (e) => {
    //e.preventDefault();
    if (e === "hindi") {
      fil.hindi = !fil.hindi;
      if (fil.hindi) {
        dispatch({ type: "hindiadd" });
      } else {
        dispatch({ type: "hindiremove" });
      }
    }

    if (e === "telugu") {
      fil.telugu = !fil.telugu;
      if (fil.telugu) {
        dispatch({ type: "teluguadd" });
      } else {
        dispatch({ type: "teluguremove" });
      }
    }

    if (e === "tamil") {
      fil.tamil = !fil.tamil;
      if (fil.tamil) {
        dispatch({ type: "tamiladd" });
      } else {
        dispatch({ type: "tamilremove" });
      }
    }

    if (e === "kannada") {
      fil.kannada = !fil.kannada;
      if (fil.kannada) {
        dispatch({ type: "kannadaadd" });
      } else {
        dispatch({ type: "kannadaremove" });
      }
    }

    if (e === "malayalam") {
      fil.malayalam = !fil.malayalam;
      if (fil.malayalam) {
        dispatch({ type: "malayalamadd" });
      } else {
        dispatch({ type: "malayalamremove" });
      }
    }

    if (e === "english") {
      fil.english = !fil.english;
      if (fil.english) {
        dispatch({ type: "englishadd" });
      } else {
        dispatch({ type: "englishremove" });
      }
    }

    if (e === "action") {
      fil.action = !fil.action;
      if (fil.action) {
        dispatch({ type: "actionadd" });
      } else {
        dispatch({ type: "actionremove" });
      }
    }

    if (e === "adventure") {
      fil.adventure = !fil.adventure;
      if (fil.adventure) {
        dispatch({ type: "adventureadd" });
      } else {
        dispatch({ type: "adventureremove" });
      }
    }

    if (e === "comedy") {
      fil.comedy = !fil.comedy;
      if (fil.comedy) {
        dispatch({ type: "comedyadd" });
      } else {
        dispatch({ type: "comedyremove" });
      }
    }

    if (e === "crime") {
      fil.crime = !fil.crime;
      if (fil.crime) {
        dispatch({ type: "crimeadd" });
      } else {
        dispatch({ type: "crimeremove" });
      }
    }

    if (e === "drama") {
      fil.drama = !fil.drama;
      if (fil.drama) {
        dispatch({ type: "dramaadd" });
      } else {
        dispatch({ type: "dramaremove" });
      }
    }

    if (e === "fantasy") {
      fil.fantasy = !fil.fantasy;
      if (fil.fantasy) {
        dispatch({ type: "fantasyadd" });
      } else {
        dispatch({ type: "fantasyremove" });
      }
    }

    if (e === "horror") {
      fil.horror = !fil.horror;
      if (fil.horror) {
        dispatch({ type: "horroradd" });
      } else {
        dispatch({ type: "horrorremove" });
      }
    }

    if (e === "mystery") {
      fil.mystery = !fil.mystery;
      if (fil.mystery) {
        dispatch({ type: "mysteryadd" });
      } else {
        dispatch({ type: "mysteryremove" });
      }
    }

    if (e === "romance") {
      fil.romance = !fil.romance;
      if (fil.romance) {
        dispatch({ type: "romanceadd" });
      } else {
        dispatch({ type: "romanceremove" });
      }
    }

    if (e === "thriller") {
      fil.thriller = !fil.thriller;
      if (fil.thriller) {
        dispatch({ type: "thrilleradd" });
      } else {
        dispatch({ type: "thrillerremove" });
      }
    }
  };

  return (
    <form className="build">

      
      <div className="Languages">
      <h1>Languages</h1>
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
      </div>

      
      <div className="Genres">
      <h1>Genres</h1>
        <label>
          Action
          <input
            type="checkbox"
            onClick={() => {
              handlechange("action");
            }}
          />
        </label>
        <br />

        <label>
          Adventure
          <input
            type="checkbox"
            onClick={() => {
              handlechange("adventure");
            }}
          />
        </label>
        <br />

        <label>
          Comedy
          <input
            type="checkbox"
            onClick={() => {
              handlechange("comedy");
            }}
          />
        </label>
        <br />

        <label>
          Crime
          <input
            type="checkbox"
            onClick={() => {
              handlechange("crime");
            }}
          />
        </label>
        <br />

        <label>
          Drama
          <input
            type="checkbox"
            onClick={() => {
              handlechange("drama");
            }}
          />
        </label>
        <br />

        <label>
          Fantasy
          <input
            type="checkbox"
            onClick={() => {
              handlechange("fantasy");
            }}
          />
        </label>
        <br />

        <label>
          Horror
          <input
            type="checkbox"
            onClick={() => {
              handlechange("horror");
            }}
          />
        </label>
        <br />

        <label>
          Romance
          <input
            type="checkbox"
            onClick={() => {
              handlechange("romance");
            }}
          />
        </label>
        <br />

        <label>
          Thriller
          <input
            type="checkbox"
            onClick={() => {
              handlechange("thriller");
            }}
          />
        </label>
        <br />

        <label>
          Mystery
          <input
            type="checkbox"
            onClick={() => {
              handlechange("mystery");
            }}
          />
        </label>
        <br />
      </div>

      <h1>{<button className="materialButton"><Link to="/movies" className="link" >Submit</Link></button>}</h1>
    </form>
  );
};

function Home(){

  return(
    <div className="home">
      <Form />
      {/* <Link to="/form" className="link" >Form</Link> */}
    </div>
  )
}


function Welcome() {

  const [check, setCheck] = useState(true);

  return (
    <div className="home">
      <Router>
        <div>
          <div>

          <h2 onClick={() => window.location.reload(true)}>
            <Link to="/"  className="homeLink" >Home 🏠</Link>
          </h2>
            {/* <h2>
              <Link to="/form" onClick={()=>{setCheck(false)}} >
              {check ? <p>Form</p> :null}
              </Link>
            </h2> */}
          </div>
          <Switch>
            {/* <Route path="/form">
              <Form />
            </Route> */}

            <Route path="/movies">
              <Movies />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Welcome;
