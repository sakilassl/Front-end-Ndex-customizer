import { BrowserRouter as Router,Route, Switch  } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart'
function App() {
  return (
    <Router>
 <div className="App">
<Switch>
  <Route path="/" element={<Cart />} />
</Switch>
<Cart/>
</div>
    </Router>
   
  );

}

export default App;
