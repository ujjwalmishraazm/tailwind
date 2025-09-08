import { createContext, useState } from "react";

export const Creatingcontext = createContext(null);

export const ContextProvider = (props) => {
    const [count, setcount] = useState(2);
    return( <Creatingcontext.Provider value={{count,setcount}}>{props.children}</Creatingcontext.Provider>)
};
