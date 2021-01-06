import axios from "axios";

export default {
    loadWineries: function () {
        return axios.get("/api/wineries");
    },

    signUpUser: function (userData) {
        return axios.get("/api/signup", userData);
    },

    signInUser: function (userData) {
        return axios.get("/api/login", userData);
    },

    getLoginStatus: function () {
        return axios.get("/api/user_data")
    },
    
    loadUsersList: function (userId) {
        return axios.get("/api/lists/:" + userId)
    },

    firstPostRoute: function (wineryData, userId) {
        return axios.post("/api/lists" + userId, wineryData)
    },

    listUpdate: function (currentList, userId) {
        return axios.put("/api/lists" + userId, currentList)
    }
};