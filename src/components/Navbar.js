import logo from '../Resources/Logo.svg';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <a>
                    <img src={logo} alt='logo'/>
                </a>
                <div>
                    <ul className='Navlinks'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about-us'}>About Us</Link></li>
                        <li><Link to={'/contact-us'}>Contact Us</Link></li>
                        <li><label className='LogIn'>Log In</label></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;