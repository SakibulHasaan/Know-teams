import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
   
    <Router>

      <Switch>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/team/:teamId">
        <TeamDetails></TeamDetails>
      </Route>

      </Switch>



    </Router>
  );
}

export default App;
