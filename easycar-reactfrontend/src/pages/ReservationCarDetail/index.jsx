import {Component} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultBooking from "../../components/Pages/BookingCarFormat";
import DefaultBookingDetail from "../../components/Pages/BookingCarDetailFormat";
import DefaultReservationDetail from "../../components/Pages/ReserveCarDetailFormat";

class BookingCar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultReservationDetail></DefaultReservationDetail>
        )
    }
}

export default BookingCar