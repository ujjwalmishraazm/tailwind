import { createContext,  useState } from "react";

export const Creatingcontext = createContext()

export const Provide =(props)=>{
    const [value,setvalue]=useState([])
    return(
    <Creatingcontext.Provider value={{value,setvalue}}>
        {props.children}
    </Creatingcontext.Provider>  
    )
}