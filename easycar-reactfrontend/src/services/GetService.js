import axios from "../axios";

class GetService {

    fetchAllCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/car/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    fetchAllDrivers = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/driver/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchAllReservation = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/Reservation/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchAllRent = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/Rent/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchAllPayments = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/payment/getAll')
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchOneCar = async (id) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/car/id='+id)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    getAllUser = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:8080/easycarRental_war/api/v1/user/getAll')
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

export default new GetService();

