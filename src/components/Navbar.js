import logo from '../Resources/Logo.svg';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <Link className='Logo' to={'/'}><img src={logo} alt='logo'/></Link>
                <ul className='Navlinks'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about-us'}>About Us</Link></li>
                    <li><Link to={'/contact-us'}>Contact Us</Link></li>
                    <li><label className='LogIn'>Log In</label></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;