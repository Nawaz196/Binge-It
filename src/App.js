import react, { createContext,useReducer } from 'react';
import './App.css';
import Cards from './Cards';
import Page from './Page';
import SearchBar from './SearchBar';
import { reducer } from './Reducer';
import Test from './Test';
import Welcome from './Welcome';




export const usercontext = createContext();

function App() {

  const initial = {
    language :[],
    genre : []
  }
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div className="App">

        {/* <Page /> */}
        {/* <SearchBar/> */}
        {/* <Cards/> */}

      <div>
        <h1>Welcome to Nawaz Movie Recommendation Page</h1>
      </div>

        <usercontext.Provider value={{state,dispatch}}>
          <Welcome/>
        </usercontext.Provider>

      
    </div>
  );
}

export default App;
