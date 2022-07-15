import {Component} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultBooking from "../../components/Home/BookingCarFormat";
import DefaultReserve from "../../components/Home/ReserveCarFormat";

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