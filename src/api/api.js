/**
 * Created by Administrator on 2019/3/14.
 */
import axios from 'axios';
export const postDada = (port) => {
    return  axios.post(`http://localhost:4000/api${port}`)
};
export const postDadaParams = (port,params) => {
    return  axios.post(`http://localhost:4000/api${port}`,params)
};