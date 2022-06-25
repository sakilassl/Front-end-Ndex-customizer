import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';
import './App.css';
import RatingResponse from './Components/RatingResponse';
import AddCart from './Pages/AddCart';
import CheckOut from './Pages/CheckOut';
import Homepage from './Pages/Homepage';
import Order from './Pages/Order';
import PaymentDetails from './Pages/PaymentDetails';
import Report from './Pages/Report';
import Shopping from './Pages/Shopping';
function App() {
  return ( 
  <div className="App">
    <Router>
    <Routes>
      <Route path="/Checkout" element={<CheckOut />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Shopping" element={<Shopping />} />
      <Route path="/Cart" element={<AddCart />} />
      <Route path="/PaymentForm" element={<PaymentDetails />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Ratingresponse" element={<RatingResponse />} />
    </Routes>
    </Router>
    </div>
  );

}

export default App;
