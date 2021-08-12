import React, {useState, useEffect} from 'react';



export default function Page() {

    var fil = {
        hindi   : false,
        telugu  : false,
        english : false,
        tamil   : false,
        kannada : false,
        malayalam : false,
    }

    const handlechange = (e)=>{
        if(e === "hindi")
        {
            fil.hindi = !fil.hindi;
            const d = !id;
            setid(d);
        }
        else if( e === "telugu")
        {
            fil.telugu = !fil.telugu;
        }
        else if(e === "english")
        {
            fil.english = !fil.english;
        }
        else if(e === "tamil")
        {
            fil.tamil = !fil.tamil;
        }
        else if(e==="kannada")
        {
            fil.kannada = !fil.kannada;
        }
        else if(e==="malayalam")
        {
            fil.malayalam = !fil.malayalam;
        }
    }

    

    const [id, setid] = useState(false);
    useEffect(() => {
        
        return () => {
            console.log("I am hindi");
        }
    }, [id])

    

    return (
        <div>

        <form>
            <label>
                Hindi
                <input type="checkbox" onClick={()=>{handlechange("hindi")}} />
            </label>
            <br />

            <label>
                Telugu
                <input type="checkbox" onClick={handlechange("telugu")}/>
            </label>
            <br />

            <label>
                English
                <input type="checkbox" onClick={handlechange("english")}/>
            </label>
            <br />

            <label>
                Kannada
                <input type="checkbox" onClick={handlechange("kannada")}/>
            </label>
            <br />

            <label>
                Malayalam
                <input type="checkbox" onClick={handlechange("malayalam")}/>
            </label>
            <br />

            <label>
                Tamil
                <input type="checkbox" onClick={handlechange("tamil")}/>
            </label>
            <br />
        </form>

        <div>
            {
                fil.hindi ? <p>im hindi</p> : <p>nope</p>
            }
        </div>

        


            
        </div>
    )
}
