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
    }
};