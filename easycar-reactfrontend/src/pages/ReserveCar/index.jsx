import {Component} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultBooking from "../../components/Pages/BookingCarFormat";
import DefaultReserve from "../../components/Pages/ReserveCarFormat";

class BookingCar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultReserve></DefaultReserve>
        )
    }
}

export default BookingCar