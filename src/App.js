
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
function App() {
  return (
     <Router>
    
      <Switch>
     <Route path="/">
      <Home></Home>
     </Route>
     
   <Route exact path="/login">
      <Login></Login>
      </Route>
     </Switch>
     
    </Router>
  
  
    );
}

export default App;
