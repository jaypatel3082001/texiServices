import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contents from './components/Contents';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Wrap all components within Router */}
      <Navbar />
      <Routes>
        {/* Root route */}
        <Route path="/" element={<Contents />} />

        {/* Other defined routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />

        {/* Redirect if no match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
