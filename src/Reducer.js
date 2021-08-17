export const reducer=(state,action)=>{

    if(action.type === "delete")
    {
        return {
            ...state,
            language : [],
            genre : []
        }
    }

    if(action.type === "hindiadd")
    {
        return {
            ...state,
            language : [...state.language,"hi"]
        }
    }
    if(action.type === "teluguadd")
    {
        return {
            ...state,
            language : [...state.language,"te"]
        }
    }
    if(action.type === "tamiladd")
    {
        return {
            ...state,
            language : [...state.language,"ta"]
        }
    }
    if(action.type === "kannadaadd")
    {
        return {
            ...state,
            language : [...state.language,"kn"]
        }
    }
    if(action.type === "malayalamadd")
    {
        return {
            ...state,
            language : [...state.language,"ml"]
        }
    }
    if(action.type === "englishadd")
    {
        return {
            ...state,
            language : [...state.language,"en"]
        }
    }

    if(action.type === "actionadd")
    {
        return {
            ...state,
            genre : [...state.genre,28]
        }
    }
    if(action.type === "adventureadd")
    {
        return {
            ...state,
            genre : [...state.genre,12]
        }
    }
    if(action.type === "comedyadd")
    {
        return {
            ...state,
            genre : [...state.genre,35]
        }
    }
    if(action.type === "crimeadd")
    {
        return {
            ...state,
            genre : [...state.genre,80]
        }
    }
    if(action.type === "dramaadd")
    {
        return {
            ...state,
            genre : [...state.genre,18]
        }
    }
    if(action.type === "fantasyadd")
    {
        return {
            ...state,
            genre : [...state.genre,14]
        }
    }
    if(action.type === "horroradd")
    {
        return {
            ...state,
            genre : [...state.genre,27]
        }
    }
    if(action.type === "mysteryadd")
    {
        return {
            ...state,
            genre : [...state.genre,9648]
        }
    }
    if(action.type === "romanceadd")
    {
        return {
            ...state,
            genre : [...state.genre,10749]
        }
    }
    if(action.type === "thrilleradd")
    {
        return {
            ...state,
            genre : [...state.genre,53]
        }
    }










    if(action.type === "hindiremove")
    {
        let newLanguage = [...state.language].filter((item)=>{
            if(item !== "hi")
            {
                return (item);
            }
        });

        return {...state, language : newLanguage};
                 
    }
    if(action.type === "teluguremove")
    {
        let newLanguage = [...state.language].filter((item)=>{
            if(item !== "te")
            {
                return (item);
            }
        });

        return {...state, language : newLanguage};
                 
    }
    if(action.type === "tamilremove")
    {
        let newLanguage = [...state.language].filter((item)=>{
            if(item !== "tn")
            {
                return (item);
            }
        });

        return {...state, language : newLanguage};
                 
    }
    if(action.type === "kannadaremove")
    {
        let newLanguage = [...state.language].filter((item)=>{
            if(item !== "kn")
            {
                return (item);
            }
        });

        return {...state, language : newLanguage};
                 
    }
    if(action.type === "malayalamremove")
    {
        let newLanguage = [...state.language].filter((item)=>{
            if(item !== "ml")
            {
                return (item);
            }
        });

        return {...state, language : newLanguage};
                
    }
    if(action.type === "englishremove")
    {
        let newLanguage = [...state.language].filter((item)=>{
            if(item !== "en")
            {
                return (item);
            }
        });

        return {...state, language : newLanguage};
                 
    }

    if(action.type === "actionremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 28)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "adventureremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 12)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "comedyremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 35)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "crimeremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 80)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "dramaremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 18)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "fantasyremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 14)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "horrorremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 27)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "mysteryremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 9648)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "romancesremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 10749)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    if(action.type === "thrillerremove")
    {
        let newgenre = [...state.genre].filter((item)=>{
            if(item !== 53)
            {
                return (item);
            }
        });

        return {...state, genre : newgenre};
                 
    }
    
    return state;
}
