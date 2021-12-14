import React, { createContext , useState} from 'react';
export const chracterContext = createContext() 
// const initialstate={
//     chracter:[
//         "شهروند",
//         "مافیا",
//         "دکتر",
//         "رئیس مافیا",
//         "کارآگاه"
//     ]
    
// }
// const chracterReducer = (state ,action)=>{
//     switch (action.type) {
//         case "Add":
            
//             break;
    
//         default:
//             break;
//     }
// }
const ChractersContextProcider = ({children}) => {

    const [chracter , setChracter] = useState([
        "شهروند",
        "مافیا",
        "دکتر",
        "رئیس مافیا",
        "کارآگاه"
    ])

    // const [state, dispatch] = useReducer(chracterReducer, initialstate)
    return (
        <chracterContext.Provider value={{chracter, setChracter}}>
                {children}
        </chracterContext.Provider>
    );
};

export default ChractersContextProcider;