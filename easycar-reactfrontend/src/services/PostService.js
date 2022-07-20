import axios from "../axios";
import {UPLOAD_IMAGE} from "./types";

class PostService {
    createPostUser = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/easycarRental_war/api/v1/user/save', data)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    createPostDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/easycarRental_war/api/v1/driver/save',data)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    createPostCar = async ( data ) => {

        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/easycarRental_war/api/v1/car/save',data)   //10s
                .then((res) => {
                    console.log(res)
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }


    fetchPosts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('posts')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }



}
export default new PostService();