import axios from "axios";

export default axios.create({
    baseURL: "https://bgwgroupwebapp-default-rtdb.asia-southeast1.firebasedatabase.app/"
})