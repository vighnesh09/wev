import axios from './';

const shopApi = {
    //get all Perfume products
    getAllPerfumeListApi(data) {
        return axios.post(`/api/all`, data);
    }
};

export default shopApi;