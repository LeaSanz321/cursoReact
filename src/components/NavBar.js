import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar(){
    return(
        <nav>

            <h1>mi E-commerce</h1>
            <ul>
                <li><button>Remeras</button></li>
                <li><button>Buzos</button></li>
                <li><button>Zapatillas</button></li>
            </ul>
            <CartWidget/>

        </nav>
    );
}

export default NavBar;