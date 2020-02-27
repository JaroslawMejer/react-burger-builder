import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e92e0.firebaseio.com/'  // BASE URL TAKEN FROM FIREBASE
});

export default instance;