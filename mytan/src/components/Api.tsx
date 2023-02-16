import axios from "axios"
import { isReturnStatement } from "typescript"


// export const Fetchdata = async () =>{
//     return  axios.get("http://localhost:3040/all").then((res)=> console.log(res.data))
    
// }
interface iData{
    title:string,
    dec:string
}

export const FetchPost = async () => {
	return axios.get("http://localhost:3040/all/data").then((res) => res.data);
};

export const CreateDate = async ({title, dec} : iData) => { 
    return await axios.post("http://localhost:3040/datapost",   {title, dec}).then((res) => res.data )
}

export const GetOne = async (id:any) => {
    return axios.get(`http://localhost:3040/one/${id}`).then((res) => res.data)
}