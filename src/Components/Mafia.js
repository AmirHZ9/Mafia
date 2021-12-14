import React, {  useContext, useState } from 'react';
import {Link} from "react-router-dom"
import Chracter from './Chracter';
import {v4} from "uuid"
import  "../Styles/mafia.css"
import { mafiacontext } from '../context/MafiaContextProvider';

const Mafia = ({children}) => {
    const {name,setName} = useContext(mafiacontext)
    const [data, setData] = useState("")
   
    const [error, setError] = useState("")
    const  changeHandler = (event) => {
        setData(event.target.value)
    }
    const addhandler = () => {
        if(data.length === 0){
           setError("نام بازیکن نمی تواند خالی باشد") 
        }else{
            
            setName([...name,{
                text:data , id:v4() , show:false
            }])
            setData('')
            setError("")
        }
       
    }

  
    return (
        <div>
            <h1>اسامی بازیکنان</h1>
            <div>
            <input className='input outline-none text-end p-1' type="text" value={data} onChange={changeHandler} placeholder="...لطفا اسامی را وارد کنید"  />
            <button className="btn btn-light" onClick={addhandler}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></button>   

            </div>
            <div className="a m-auto my-3  rounded-2">
           <h2 className="bg m-auto   text-danger fs-5 ">{error}</h2> 

            </div>
    
            {
            name.map(item =><Chracter key={v4()} 
                                        text={item.text}
                                         name={name}
                                          setName={setName}
                                          data ={item}
                                          /> )
            }
            {
                name.length < 5 ? <h3 className="bg my-3 m-auto rounded-2 p-2 text-danger fs-5">حداقل تعداد بازیکنان 5 نفر</h3> :
                <div className='a mt-2 m-auto p-2 shadow rounded-2 ' >
                     <Link to="/MafiaChracters" className='text-white text-decoration-none  '>انتخاب نقش ها ({name.length})</Link>
                </div>
            }
 
        </div>
    );
};

export default Mafia;