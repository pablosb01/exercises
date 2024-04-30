import React, {createContext, useContext} from "react";

export const LanguageContext = createContext('es')

export function Component(){

    const language = useContext(LanguageContext);

    return(
        <>

            {language == 'es' ? <p>Hola que tal como estan</p> : <p>Hello how are u</p>}

            
        </>
    )
}

