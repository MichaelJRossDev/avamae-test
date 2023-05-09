import logo from '../Resources/Logo.svg';
import './NavbarStyles.css';

function Navbar() {
    return (
        <>
            <nav>
                <a>
                    <img src={logo} alt='logo'/>
                </a>
                <div>
                    <ul className='Navlinks'>
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a className='LogIn'>Log In</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;