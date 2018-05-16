import axios from "axios";

export default {
    // Gets all books
    getLists: function () {
        return axios.get("/api/list");
    },
    // Gets the book with the given id
    getList: function (id) {
        return axios.get("/api/list/" + id);
    },
    // Deletes the book with the given id
    deleteList: function (id) {
        return axios.delete("/api/list/" + id);
    },
    // Updates the book with the given id
    updateList: function (id, listData) {
        console.log("i'm at axios", listData, id);
        return axios.put("/api/list/" + id, listData);
    },
    // Saves a book to the databas
    saveList: function (listData) {
        console.log("i'm at axios saving ", listData);
        return axios.post("/api/list", listData);
    },
    // Gets the book with the given id
    getItem: function (id) {
        return axios.get("/api/item/" + id);
    },
};

