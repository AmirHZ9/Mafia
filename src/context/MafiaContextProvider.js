import React, { createContext, useState } from 'react';

export const mafiacontext = createContext()
const MafiaContextProvider = ({children}) => {


    const [name, setName] = useState([]);
    
 

    return (
        <mafiacontext.Provider value={{name, setName}}>
            {children}
        </mafiacontext.Provider>
    );
};

export default MafiaContextProvider;