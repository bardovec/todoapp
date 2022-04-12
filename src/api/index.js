import axios from 'axios';

export const fetchPhoto = (number) => axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${number}`);
