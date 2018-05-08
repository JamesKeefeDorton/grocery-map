import axios from "axios";

export default {
    // Gets all books
    getInventory: function () {
        return axios.get("/api/inventory");
    }
};
