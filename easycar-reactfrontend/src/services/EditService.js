import axios from "../axios";

class EditService {
    createEditDriver = async (data) => {
        /*console.log("form data: " + id)*/
        const promise = new Promise((resolve, reject) => {
            axios.put('http://localhost:8080/easycarRental_war/api/v1/driver/edit',data)   //10s
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

    createEditCar = async (data) => {
        /*console.log("form data: " + id)*/
        const promise = new Promise((resolve, reject) => {
            axios.put('http://localhost:8080/easycarRental_war/api/v1/car/edit',data)   //10s
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
export default new EditService();