import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import Create from './components/create/Create';
import Details from './components/details/Details'

function App() {
  return (
    <div>
      <Route path='/' exact component={LandingPage} />
      <Route path='/videogames' component={Home} />
      <Route path='/create' component={Create} />
      <Route path='/details' component={Details} />
    </div>
  );
}

export default App;
