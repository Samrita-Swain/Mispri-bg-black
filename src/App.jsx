import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import TrackOrder from './components/TrackOrder/TrackOrder';
import Cart from './components/Cart/Cart';
import Favorites from './components/Favorites/Favorites';
import AboutUs from './components/AboutUs/AboutUs';
import TermsAndConditions from './components/TermsAndConditions';
import './App.css';
import './components/styles/DarkTheme.css';

function App() {
  return (
    <Router>
      <div className="dark-mode">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favourites" element={<Favorites />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
