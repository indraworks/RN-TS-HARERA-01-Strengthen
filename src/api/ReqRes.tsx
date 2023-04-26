import axios from "axios";

export const ReqResApi = axios.create({
    baseURL:'https://reqres.in/api'  //kita ambil path utama
})