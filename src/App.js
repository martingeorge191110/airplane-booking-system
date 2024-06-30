import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router
  , Route
  , Switch }
   from 'react-router-dom';
import Header from './Components/Header/header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
