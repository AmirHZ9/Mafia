import React, { useContext } from 'react';
import { mafiacontext } from '../context/MafiaContextProvider';
const Ravi = () => {
    const {roles} = useContext(mafiacontext)
    return (
        <div>
           {/* {
               roles.map(item => item)
           }  */}
        </div>
    );
};

export default Ravi;