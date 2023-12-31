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
export const ProductPatchrequest = async(data,id)=>{
    const res = await axios({
        method :'patch',
        url: 'https://productapi-4in8.onrender.com/api/products/' +id,
        data: data
    });
    return res;
}
export const ProductDeleterequest = async(id)=>{
    const res = await axios({
        method :'delete',
        url: 'https://productapi-4in8.onrender.com/api/products/'+id,
    });
    return res;
}