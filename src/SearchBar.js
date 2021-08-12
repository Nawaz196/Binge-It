import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cards from './Cards';
import './SearchBar.css'


// telugu   - te
// hindi    - hi
// english  - en-US
// tamil    - ta
// kannada  - kn
// malayalam- ml
// url = "https://api.themoviedb.org/3/movie/popular?api_key=edf9e14b1b7e3bf5ad89f45c5c94d155&with_original_language=hi&page=1"

// image base url = "https://image.tmdb.org/t/p/original"

// genre - &with_genres=${}

function SearchBar() {

    const [language,setLanguage] = useState("English");
    const [id,setId] = useState("");
    const [movies,setMovies] = useState([]);
    

    const handlechange = ()=>{
        
        if(language === "hindi")
        {
            setId("hi");
        }
        else if(language === 'telugu')
        {
            setId("te");
        }
        else if(language === 'malayalam')
        {
            setId("ml");
        }
        else if(language === 'kannada')
        {
            setId("kn");
        }
        else if(language === 'tamil')
        {
            setId("ta");
        }
        else
        {
            setId("en");
        }
        //console.log(id);

        //setLanguage("");
    }
    
    

    useEffect(()=>{

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=edf9e14b1b7e3bf5ad89f45c5c94d155&language=${id}`)
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


    },[id])

    return (
        <div >

        <br />
        <br />

        <input type="text"  value={language} onChange={e=>setLanguage(e.target.value)}/>
        <button type="submit" onClick={handlechange}>Submit</button>
        
        <div className="show-case">

        {
            movies.map((e)=>{
                return (
                    
                    <Cards 
                    title={e.title}
                    imgurl={e.poster_path}
                     />
                )
            })
        }

        </div>
       
            
        </div>
    )
}

export default SearchBar
