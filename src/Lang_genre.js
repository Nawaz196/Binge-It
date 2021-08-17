import React,{useState,useEffect,useContext} from 'react'
import Cards from './Cards';
import axios from 'axios';
import { usercontext } from "./App";
import "./Cads.css";


function Lang_genre(props) {

    const [movies,setMovies] = useState([]);
    const {state, dispatch} = useContext(usercontext);
    //console.log(props.item);
    console.log(props.genre);

    useEffect(()=>{

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=edf9e14b1b7e3bf5ad89f45c5c94d155&with_original_language=${props.lang}&page=1&with_genres=${props.genre}`)
        .then(res=>{
            console.log(res.data);
            // res.data.results.map((e)=>{
            //     console.log(e.title);
            // })
            setMovies(res.data.results);

        })
        .catch(err=>{
            console.log(err)
        })      


    },[])

    return movies.map((i) => (
        <div className="nawaz">
            
            <Cards
            title={i.title} 
            imgurl={i.poster_path}
            overview={i.overview}
            vote_average={i.vote_average}
            //genre_id={i.genre_id}

            />
            
            


        </div>
    ))


}   

export default Lang_genre
