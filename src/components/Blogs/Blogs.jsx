import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogs } from "../../redux/actions";
import Miniatura from "../Miniatura/Miniatura";
import "./Blogs.css";


const Blogs = () => {

    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    return (
        <div className="contenedorBlogs">
            {
                blogs.map((blog) => {
                    return(
                        <div>
                            <Miniatura
                               key={blog?.ID}
                               id={blog?.ID}
                               titulo={blog?.titulo}
                               introduccion={blog?.introduccion}
                               imgPortada={blog?.imgPortada}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Blogs;