import axios from 'axios';

export const WorkGetrequest = async()=>{
    const res = await axios({
        method :'get',
        url: 'https://workapi-f6y1.onrender.com/api/works'
    });
    return res;
}
export const WorkPostrequest = async(data)=>{
    const res = await axios({
        method :'post',
        url: 'https://workapi-f6y1.onrender.com/api/works',
        data: data
    });
    return res;
}