import axios from "axios";

export default {
    loadWineries: function () {
        return axios.get("/api/wineries");
    },

    checkUserStatus: function() {
        return axios.get("/api/user_data");
    }
};