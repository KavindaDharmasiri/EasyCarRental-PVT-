import axios from "../axios";

class GetService {

    fetchAllCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('car/getAll')
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
            axios.get('driver/getAll')
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
            axios.get('Reservation/getAll')
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
            axios.get('Rent/getAll')
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
            axios.get('payment/getAll')
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
            axios.get('car/id='+id)
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
            axios.get('user/getAll')
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

