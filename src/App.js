import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
