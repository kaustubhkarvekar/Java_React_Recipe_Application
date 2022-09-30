import axios from 'axios'


const WISHLIST_BASE_REST_API_URL = 'http://localhost:8080/custom/api/wishlist';

class WishlistService{

    getAllWishes(id){
        return axios.get(WISHLIST_BASE_REST_API_URL + '/' +id)
    }   

    createWish(wish){
        return axios.post(WISHLIST_BASE_REST_API_URL, wish)
    }

    deleteWish(id){
        return axios.delete(WISHLIST_BASE_REST_API_URL + '/' +id)
    }

}

export default new WishlistService();