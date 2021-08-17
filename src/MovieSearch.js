import React,{useState,useEffect} from 'react'
import Cards from './Cards';
import axios from 'axios';
import './MovieSearch.css';
import "./Cads.css";

function MovieSearch(props) {

    const [movies,setMovies] = useState([]);
    console.log(props.item);

    useEffect(()=>{

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=edf9e14b1b7e3bf5ad89f45c5c94d155&with_original_language=${props.item}&page=1`)
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

                
            />
        </div>
    ))
    
}

export default MovieSearch
