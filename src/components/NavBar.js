import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <nav>
            <h1>mi E-commerce</h1>
            <ul>
                <button>Remeras</button>
                <button>Buzos</button>
                <button>Zapatillas</button>
            </ul>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;