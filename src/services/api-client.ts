import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd596cbc3b5804d378b66f15a656e8ffd'
    }
})
