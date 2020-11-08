import axios from 'axios'
const baseURL = 'http://localhost:8081'

const fetch = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

fetch.interceptors.request.use(function(config){
    config.headers.Authorization=localStorage.getItem('token');
    return config
},function(err){
    return Promise.reject(err)
})

fetch.interceptors.response.use(function(response){
    let res =null;
    if(response.status == 200){
        res =response
    }else{
        res={
            status:0,
            desc:"网络链接出错"
        }   
    }
    return res
},function(err){
    return Promise.reject(err)
})

export default fetch