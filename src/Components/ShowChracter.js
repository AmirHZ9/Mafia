import React, { createContext, useContext, useEffect, useState } from "react";
import "../Styles/mafia.css";
import styles from "../Styles/chracter.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { mafiacontext } from "../context/MafiaContextProvider";
import { chracterContext } from "../context/ChractersContextProcider";
import { Link } from "react-router-dom";

const ShowChracter = ({children}) => {
 
  const [newChar, setNewChar] = useState();
  const [info, setInfo] = useState('');
  const { name,setName } = useContext(mafiacontext);
  const { chracter } = useContext(chracterContext);
console.log(name)
  useEffect(() => {

    setNewChar(chracter.map((item) => item));
    
}, [setNewChar]);
console.log(info)
const showchracter = (event) => {
  const value = event.target.value
    const randomchar = Math.floor(Math.random() * newChar.length);
    const randomChracter = newChar[randomchar];
    setNewChar(newChar.filter((item) => item !== randomChracter));
    
    window.alert(` ${value}:${randomChracter}`);
    

    (name.map(item => {if(item.text === event.target.value){
        item.show = true
             }}))
            

             setInfo([...info,{value,randomChracter}])
   
 
    

  };
  // const Ravi = () => {
  //   setName(" ")
  //   setName(info)
  //   console.log(name)
  // }
    
  return (
    <div>
      {name.map((item) => (
        <div  className={item.show  ? styles.deactive :" "}>
          <div className="d-flex align-items-baseline justify-content-center  ">
            <p className="p-3 bg rounded-2">{item.text} </p>
            <button onClick={showchracter} value={item.text} className="bg-warning text-dark" >
              show{" "}
            </button>
         
          </div>
        </div>
      ))}

      {/* <Link to="/Ravi"><button onClick={Ravi}>راوی</button></Link> */}
      {/* <button onClick={Ravi}>راوی</button> */}


    </div>


  );
};

export default ShowChracter;
