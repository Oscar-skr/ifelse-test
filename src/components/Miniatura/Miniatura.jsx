import { Link } from "react-router-dom";
import "./Miniatura.css";

const Miniatura = ({id, titulo, introduccion, imgPortada}) => {
    return(
        <div className="contenedorMiniatura">
            {console.log(`${window.imageURL}${imgPortada}`)}
            <Link to={`/detail/${id}`} className="link" >
                <img src={`${window.imageURL}${imgPortada}`} className="imagePortada"/>
            </Link>
            <h2 className="titulominiatura">{titulo}</h2>
            <p className="parrafo">{introduccion}</p>
        </div>
    )
}

export default Miniatura;