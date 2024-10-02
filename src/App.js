import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './src_bootstrap.css';
import './homePage.css';
import './src_tailwind.css';
import 'https://kit.fontawesome.com/c5e4d5e6fa.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
import HomePage from './homePage';
import Header from './header';
import Footer from './footer';
import Signup from './signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div>
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route path='/signup'>
              <Signup/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
