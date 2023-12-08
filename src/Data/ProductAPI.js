import axios from 'axios';

export const ProductGetrequest = async()=>{
    const res = await axios({
        method :'get',
        url: 'https://productapi-4in8.onrender.com/api/products'
    });
    return res;
}
export const ProductPostrequest = async(data)=>{
    const res = await axios({
        method :'post',
        url: 'https://productapi-4in8.onrender.com/api/products',
        data: data
    });
    return res;
}