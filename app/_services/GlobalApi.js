
import axios from 'axios'

const getAllConf =async ()=>{
    const {data} = await axios.get('http://localhost:3000/api/conference')
    //const data = await res.json()
    return data
}
const addConf = (data)=>axios.post('http://localhost:3000/api/conference',data )
const deleteConf = (data)=>axios.delete('http://localhost:3000/api/conference',data )
const login = (data)=>axios.post('http://localhost:3000/api/auth/login',data )
const register = (data)=>axios.post('http://localhost:3000/api/auth/register',data )

const getBlogTheme =async ()=>{
    const {data} = await axios.get('http://localhost:3000/api/blogTheme')
    return data
}
const getArticles =async ()=>{
    const {data} = await axios.get('http://localhost:3000/api/blog')
    return data
}
const addArticle = (data)=>axios.post('http://localhost:3000/api/blog',data )
const deleteArticle = (data)=>axios.delete('http://localhost:3000/api/blog',data )
export default {
    getAllConf,
    addConf,
    deleteConf,
    login,
    register,
    getArticles,
    addArticle,
    deleteArticle
}