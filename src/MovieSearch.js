import React,{useState,useEffect} from 'react'
import Cards from './Cards';
import axios from 'axios';

function MovieSearch(props) {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=edf9e14b1b7e3bf5ad89f45c5c94d155&language=${props.item}`)
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


    return (
        <div>

        {
            console.log(props.item)
            /* movies.map((e)=>{
                console.log(e.title);
                return (                    
                    
                    <Cards 
                    title={e.title}
                    imgurl={e.poster_path}
                     />
                )
            }) */
        }
            
        </div>
    )
}

export default MovieSearch
