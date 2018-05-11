import axios from "axios";

export default {
    getListItems: function () {
        return axios.get("/api/item");
    }
};
