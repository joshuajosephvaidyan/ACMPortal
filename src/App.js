import LandingPage from "./pages/LandingPage";
import About from './pages/About';
import Events from './pages/Events';
import Members from './pages/Members';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route match exact path="/">  
             <LandingPage />
          </Route> 
          <Route match exact path="/about">  
             <About />
          </Route>
          <Route match exact path="/events">  
             <Events />
          </Route>
          <Route match exact path="/members">  
             <Members />
          </Route>
          <Route match exact path="/gallery">  
             <Gallery />
          </Route>
          <Route match exact path="/contact">  
             <Contact />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
