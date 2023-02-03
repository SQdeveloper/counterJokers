import APIRequest from '../../models/axios.config';

const CallApi = () => {
    return APIRequest.get('/');
};

export default CallApi;