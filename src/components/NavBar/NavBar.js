import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to="/">
                <h1>mi E-commerce</h1>
            </Link>
            <div>
                <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/buzos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
                <NavLink to={`/category/zapatillas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Zapatillas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;