import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <div className="App">
      <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css"></link>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      <p className='WebsiteFooter'>{'Website Development not by AVAMAE (yet)'}</p>
    </div>
  );
}

export default App;
