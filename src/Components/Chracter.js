import React from 'react';
import  '../Styles/mafia.css'
import "bootstrap/dist/css/bootstrap.min.css";




const Chracter = ({data, name, text, setName}) => {
   
    const removehandler = () => {
        setName(name.filter(item => item.id !== data.id ))
      
    }
    return (
        <div >
            <div className='d-flex felx justify-content-center align-items-baseline' >
           
            <h1 className="bg rounded-1 p-2 fs-5">{text}</h1>
            
            <button className='btn btn-light' onClick={removehandler}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/></svg></button>
            </div>
        </div>
    );
};

export default Chracter;