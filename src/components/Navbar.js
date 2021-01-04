import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
 
    const handleClick =()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);

    // to display
    const showButton =() => {
        if(window.innerWidth<=960) {
            setButton(false)
        }else{
            setButton(true);
        }
    };
    
    // whenevr resizing, showButton will be prompted
    window.addEventListener('resize', showButton);

    return (
        <div>
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo">
                            AlejandraCODES <i class="fas fa-laptop-code"></i>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'> Contact </Button>}
                    </div>
                </nav>
            </>
        </div>
    )
}

export default Navbar