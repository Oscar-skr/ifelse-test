import { Link } from "react-router-dom";
import "./Contenedor_NavBar.css";

const NavBar = () => {
    return(
        <div className="Contenedor_NavBar">
            <Link className="Link1" to="/home">Home</Link>
            <Link className="Link2" to="/contacto">Contacto</Link>
        </div>
    )
}

export default NavBar;