import axios from "axios";
import LS from "../utils";

export default axios.create({

    baseURL: "https://dev-example.sanbercloud.com/api",
    headers: {
        'Authorization':"Bearer "+ LS("token"),
    },

});
