
import axios from 'axios'
const apiURl = import.meta.env.VITE_API_URL

const calendarApi = axios.create({
    baseURL: apiURl
})

// Todo: configurar interceptores

calendarApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
})

export default calendarApi;
