import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://itx-frontend-test.onrender.com/'
});

export default articlesApi;
