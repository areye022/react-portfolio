import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
