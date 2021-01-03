import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart'
import {Provider} from 'react-redux';
import store from './store/index';
import Details from './components/Details'




function App() {
  return (
    <Router>
      <Provider store={store}>
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/cart' component={Cart} />
      <Route path='/details/:id' component={Details} />
      </Provider>
      </Router>
  );
}

export default App;
