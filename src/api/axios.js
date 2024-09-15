import axios from 'axios';

const instance = axios.create()({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e66da1bcd03342eb99974c617697c1c1",
        language: "ko-KR"
    }
})

export default instance;