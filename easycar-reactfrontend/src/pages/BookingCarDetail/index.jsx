import {Component} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultBooking from "../../components/Pages/BookingCarFormat";
import DefaultBookingDetail from "../../components/Pages/BookingCarDetailFormat";

class BookingCar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultBookingDetail></DefaultBookingDetail>
        )
    }
}

export default BookingCar