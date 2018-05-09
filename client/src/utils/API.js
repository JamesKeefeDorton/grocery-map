import axios from "axios";

export default {
    // Gets all books
    getListItems: function () {
        return axios.get("/api/listitems");
    }
};
