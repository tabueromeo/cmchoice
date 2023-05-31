import API from "./services";

const END_POINT = `shoppingcarts`;

export default {
    Poststore(objetData) {
        return API.post(END_POINT, objetData);
    },

    Getstore() {
        return API.get(END_POINT);
    },

    DeleteAllGetstore() {
        return API.delete(END_POINT);
    },
    DeleteOneGetstore(id) {
        return API.delete(END_POINT +`/${id}`);
    }
}