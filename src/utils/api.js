import axios from 'axios';

const getUbirici = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Urubici,br&lastupdate&units=metric&appid=70acf4cf4b42e2b7865ebf21575dc257`)
    return response.data
} 

const getNuuk = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=nuuk,gl&units=metric&appid=70acf4cf4b42e2b7865ebf21575dc257`)
    return response.data
} 

const getNairobi = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=nairobi,ke&units=metric&appid=70acf4cf4b42e2b7865ebf21575dc257`)
    return response.data
} 

export default {
    getUbirici,
    getNuuk,
    getNairobi
}