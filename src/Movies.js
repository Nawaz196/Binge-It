import React, { useContext, useState, useEffect } from 'react'
import { reducer } from './Reducer'
import { usercontext } from "./App";
import axios from 'axios';
import Cards from './Cards';
import MovieSearch from './MovieSearch';

function Movies() {

    const {state, dispatch} = useContext(usercontext);
    const [movies,setMovies] = useState([]);
    const [id,setId] = useState();
    const [st, setst] = useState(false);

    // useEffect(()=>{

    //     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=edf9e14b1b7e3bf5ad89f45c5c94d155&language=${id}`)
    //     .then(res=>{
    //         console.log(res.data);
    //         // res.data.results.map((e)=>{
    //         //     console.log(e.title);
    //         // })
    //         setMovies(res.data.results);
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })      


    // },[id])

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    // const idchange=(d)=>{
    //     setId(d);
    // }

    //const newList = [...state.language];


    // useEffect(() => {
        
    //     setTimeout(() => {
    //         setst(true);
    //     }, 500);
    // }, [])


    // const render = ()=>{

    //     let obj = [];
    //     if(st){
    //         obj.push(
    //             <div>
    //                 im Nawaz
    //             </div>
    //         )
    //     }
    //     return obj;
    // }

  


    return (
        <div>

        
        {
            [...state.language].map((id)=>{
                console.log(typeof(id));
                <MovieSearch item={id}/>
            })
        }
        
        
            
        </div>
    )
}

export default Movies
