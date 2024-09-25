import axios from "axios"

export const guardarDonanteRequest = async(values)=>{
    return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/donante/guardar`,values);
};