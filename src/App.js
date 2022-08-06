import { BrowserRouter as Router,Route,Routes  } from 'react-router-dom';
import './App.css';
import RatingResponse from './Components/RatingResponse';
import AboutUs from './Pages/AboutUs';
import AddCart from './Pages/AddCart';
import BillingDetails from './Pages/BillingDetails';
import CheckOut from './Pages/CheckOut';
import Homepage from './Pages/Homepage';
import Order from './Pages/Order';
import PaymentDetails from './Pages/PaymentDetails';
import Report from './Pages/Report';
import Shopping from './Pages/Shopping';
import Successfull from './Pages/Successfull';
 
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
      <Route path="/Admin/Report" element={<Report />} />
      <Route path="/BillingDetails" element={<BillingDetails />} />
      <Route path="/Aboutus" element={<AboutUs />} />
      <Route path="/Successfull" element={<Successfull/>} />
    </Routes>
    </Router>
    </div>
  );

}

export default App;
