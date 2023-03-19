import { Link } from "react-router-dom";
import "./Landing.css";


const Landing = () => {
    return(
        <div className="contenedorLanding">
            <span>Hola, soy el Landing.</span>
            <button  className="clickButton">
                <Link to="/home" className="linkButton">Ingresar</Link>
            </button>
        </div>
    )
}


export default Landing;