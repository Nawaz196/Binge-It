import React, { useContext, useState, useEffect } from 'react'
import { reducer } from './Reducer'
import { usercontext } from "./App";
import axios from 'axios';
import Cards from './Cards';
import MovieSearch from './MovieSearch';
import './MovieSearch.css';
import Lang_genre from './Lang_genre';

import { Link } from 'react-router-dom';

function Movies() {

    const {state, dispatch} = useContext(usercontext);
    const [movies,setMovies] = useState([]);
    const [id,setId] = useState();
    const [st, setst] = useState(false);

    let obj1=[];
    [...state.language].map((e)=>{
        obj1.push(e);
    });

    let obj2=[];
    [...state.genre].map((e)=>{
        obj2.push(e);
    });

    // console.log([...state.language]);
    // console.log([...state.genre]);


    
    //dispatch({ type: "delete" });
    console.log("Im Movies");
    console.log([...state.language]);
    //console.log([...state.genre]);


    

    const gg = ((e,item)=>{

        let newL = e.filter((b)=>{
            if(b!=item)
            {
                return b;
            }
        })

        e = newL;  


    })

  

    //console.log(obj2);

    // let obj3 = ["en","te","hi","kn","ta","ml"];
    //     return obj3.map((item)=>(
    //         obj2.map((item2)=>(
    //             <div>
    //                 <Lang_genre lang={item} genre={item2}/>
    //             </div>
    //         ))
    //     ))





    if((obj1.length===0) && (obj2.length===0))
    {
        
        return (
            <div>
                {/* <Link to="/">Home</Link> */}
                You havent chose any filter.
            </div>
        )

    }
    else if((obj1.length==0) && (obj2.length !==0))
    {
        let obj3 = ["en","te","hi","kn","ta","ml"];
        return (
            <div>

            {/* <Link to="/">Home</Link> */}
            {
                obj3.map((item)=>(
                    obj2.map((item2)=>(
                        <div className="nawaz">
                        <Lang_genre lang={item} genre={item2}/>
                        </div>

                    ))
                ))
            }
                
            </div>
        ) 
        
    }
    else if(obj1.length!==0 && (obj2.length===0))
    {
        return (
            <div>
                {/* <Link to="/">Home</Link> */}
                {
                    obj1.map((item)=>(
                        <div className="nawaz">
                        <MovieSearch item={item}/>

                        </div>
                    ))
                }
            </div>
        )

        // return obj1.map((item)=>(
        //     <div className="nawaz">
            
        //         <MovieSearch item={item}/>
        //     </div>
        // ))
        
    }
    else
    {  
        return (
            <div>
                {/* <Link to="/">Home</Link> */}
                {
                    obj1.map((item)=>(
                        obj2.map((item2)=>(
                            <div className="nawaz">
                                <Lang_genre lang={item} genre={item2}/>
                            </div>
                        ))
                    ))

                }
            </div>
        )  

    // return obj1.map((item)=>(
    //     obj2.map((item2)=>(
    //      <div className="nawaz">
    //      <Lang_genre lang={item} genre={item2}/>
    //      </div>
            
    //     ))
    //     //(gg(state.language,item))

    // ))
        
    }


    
    
}


export default Movies
