import axios from 'axios';

const instance = axios.create({
	baseURL: "https://deltax-spotify-harsh.herokuapp.com/",
});

export default instance;