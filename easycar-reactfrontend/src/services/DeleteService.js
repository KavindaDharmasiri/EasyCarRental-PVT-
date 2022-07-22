import axios from "../axios";

class DeleteService {

    deleteCarCar = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.delete('http://localhost:8080/easycarRental_war/api/v1/car?id='+ data)   //10s
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



    deleteDriver = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.delete('http://localhost:8080/easycarRental_war/api/v1/driver?id='+ data)   //10s
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
}
export default new DeleteService();












