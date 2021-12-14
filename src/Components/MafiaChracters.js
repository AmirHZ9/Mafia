import React, { useContext} from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/chracter.module.css";
import { shahrvand,mafia } from "./Chracters";
//context
import { mafiacontext } from "../context/MafiaContextProvider";
import { chracterContext } from "../context/ChractersContextProcider";
const MafiaChracters = () => {
  const name = useContext(mafiacontext);
  const { chracter, setChracter } = useContext(chracterContext);
  const number = name.name.length;
  
  const Chracterhandler = (event) => {
    const name = event.target.innerText;
    setChracter([...chracter, name]);
    

    if (chracter.includes(name)) {
      setChracter(chracter.filter((item) => item !== name));
    }
  };
  return (
    <div>
      <h1> تعداد بازیکنان ({number})</h1>
      <h1>انتخاب نقش ها</h1>
      <div className={styles.container}>
        <div>
          <h1>نقش های شهروند</h1>
        {
          shahrvand.map(item => <button onClick={Chracterhandler}  className={chracter.includes(item) ? styles.chooseshahrvand : " "}>{item}</button>)
        }
        </div>
        <div>
          <h1>نقش های مافیا</h1>
          {
          mafia.map(item => <button onClick={Chracterhandler}  className={chracter.includes(item) ? styles.choosemafia : " "}>{item}</button>)
         }
        </div>
        
      </div>



      {
        chracter.length <= 3 || chracter.length !== number ? <p className="bg m-auto rounded-2 mt-2 p-2 bg-warning text-dark">.تعداد نقش ها کافی نیست </p> :
        <div>
          <Link to="/Showchracters">
            <button className={styles.confirm}>تایید نقش ها</button>
          </Link>
        </div>
}

    </div>
  );
};

export default MafiaChracters;
