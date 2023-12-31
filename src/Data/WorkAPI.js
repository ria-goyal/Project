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
export const WorkPatchrequest = async(data,id)=>{
    const res = await axios({
        method :'patch',
        url: 'https://workapi-f6y1.onrender.com/api/works/'+id,
        data: data
    });
    return res;
}
export const WorkDeleterequest = async(id)=>{
    const res = await axios({
        method :'delete',
        url: 'https://workapi-f6y1.onrender.com/api/works/'+id,
    });
    return res;
}