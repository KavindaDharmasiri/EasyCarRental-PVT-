import axios from "../axios";
import {UPLOAD_IMAGE} from "./types";

class ImageAction {

    uploadImage = async ( data) => {

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        const promise = new Promise((resolve, reject) => {
            axios.post('http://localhost:8080/easycarRental_war/api/v1/user/img', data , config )   //10s
                .then((res) => {
                    console.log("res")
                    return resolve(res)
                })
                .catch((er) => {
                    console.log("hhhy")
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
export default new ImageAction();