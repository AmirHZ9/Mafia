import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Mafia from "./Components/Mafia";
import MafiaChracters from "./Components/MafiaChracters";
import ShowChracter from "./Components/ShowChracter";
import Ravi from "./Components/Ravi";
//context
import MafiaContextProvider from "./context/MafiaContextProvider";
import ChractersContextProcider from "./context/ChractersContextProcider";

function App() {
  return (
    <div className="text-center mt-5">
      <MafiaContextProvider>
        <ChractersContextProcider>
   
            <Switch>
              <Route path="/Mafia" component={Mafia} />
              <Route path="/Ravi" component={Ravi} />
              <Route path="/Showchracters" component={ShowChracter} />
              <Route path="/MafiaChracters" component={MafiaChracters} />
              <Redirect to="/Mafia" />
            </Switch>
         
        </ChractersContextProcider>
      </MafiaContextProvider>
    </div>
  );
}

export default App;
