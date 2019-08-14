import axios from 'axios'
const service =axios.create({
    timeout:5000
});

service.interceptors.request.use(config=>{
    return config
}, error=>{
    return Promise.reject(error)
    });

service.interceptors.response.use(result=>{
    return result
}, error=>{
    return Promise.reject(error)
    })






