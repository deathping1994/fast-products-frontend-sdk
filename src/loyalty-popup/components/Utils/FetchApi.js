
import { WALLET_API_URI } from '../..'
import axios from 'axios'

const fetchApi = async (route, method)=>{

    const response = await axios({
        method: method,
        baseURL: `${WALLET_API_URI}${route}`,
        data:{
            customer_id: "7734670819630",
            user_hash: "299037b6d401b25374f60cb316c24114",
            client_id: "Q2xpZW50OjY="
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}

export default fetchApi 