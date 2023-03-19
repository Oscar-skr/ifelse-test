import { GET_BLOGS, GET_DESTACADAS, GET_BLOG_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from "axios";

//Como la respuesta de la API es una promesa, es necesario usar asyn-await.
export const getBlogs = () => {
    return async function(dispatch){
        let response = await axios("https://repo.ifelse.com.ar:7000/api/blogs/categoriaID/14/page/1/limit/10");
        return dispatch({ type: GET_BLOGS, payload: response.data.rows })
    }
}

export const getBlogDetail = (id) => {
    return async function(dispatch){
        fetch(`https://repo.ifelse.com.ar:7000/api/blogs/id/${id}`)
        .then(response => response.json())
        .then(data => dispatch(({ type: GET_BLOG_DETAIL, payload: data})))
    }
}


export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}