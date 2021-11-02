import logo from '../icons/logo.svg';
import cart from '../icons/cart.svg';

function NavBar() {
    return (
        <nav className="navbar">
            <a href="#">
                <img src={logo} alt="" className="logo"/>
            </a>
            <div>
                <ul>
                    <li><a href="#">Nacionales</a></li>
                    <li><a href="#">Extranjeras</a></li>
                    <li><a href="#">Artesanales</a></li>
                    <li><a href="#">Conocenos</a></li>
                </ul>
            </div>
            <a href="#">
                <img src={cart} alt=""/>
            </a>
        </nav>
    )
}

export default NavBar;