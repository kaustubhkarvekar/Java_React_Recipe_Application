import axios from 'axios'
const USER_BASE_REST_API_URL = 'http://localhost:8080/custom/api/users';

class UserService{

    getAllUsers(){
        return axios.get(USER_BASE_REST_API_URL)
    }   

    createUser(user){
        return axios.post(USER_BASE_REST_API_URL, user)
    }

    getUserById(userId){
        return axios.get(USER_BASE_REST_API_URL + '/' + userId);
    }

    validateUser(user){
        return axios.post(USER_BASE_REST_API_URL + '/validate', user)
    }

}

export default new UserService();