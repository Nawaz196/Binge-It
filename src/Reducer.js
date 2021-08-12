export const reducer=(state,action)=>{

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
    return state;
}
