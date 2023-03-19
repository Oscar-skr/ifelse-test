import { getBlogDetail, cleanDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {

    //Con el dispatch despacho las actions.
    const dispatch = useDispatch();

    //Con el useParams obtengo el ID del elemento.
    const { id } = useParams();


    const blogDetail = useSelector((state) => state.blogDetail)

    useEffect(() =>{
        dispatch(getBlogDetail(id));

        return () => dispatch(cleanDetail(id))
    }, [id])

    const textoHTML = blogDetail?.desarrollo;
    const imgPortada = blogDetail?.imgPortada;
    //El segundo div del return permite que el renderizado sea interpretando las etiquetas HTML que vienen desde la API.
    return(
        <div className="detailContenedor">
            <h1 className="tituloDetail">{blogDetail.titulo}</h1>
            <div dangerouslySetInnerHTML={{ __html: textoHTML }} className="contenedorHTML" />
            <img src={`${window.imageURL}${imgPortada}`} className="imageDetail" alt=""/>
            <div className="relleno"></div>
            <div className="relleno2"></div>

        </div>
    )
}

export default BlogDetail;