import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact/>
        </Switch>
      </Router>
    </>
  );
}

export default App;