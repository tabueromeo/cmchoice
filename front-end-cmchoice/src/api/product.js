import API from "./services";

const END_POINT = `products`;

export default {
    allProducts() {
        return API.get(END_POINT);
    } ,
    
    OneProduct(id) {
        return API.get(END_POINT+`/${id}`);
    }
}