import {Component} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultBooking from "../../components/Home/BookingCarFormat";
import DefaultBookingDetail from "../../components/Home/BookingCarDetailFormat";
import DefaultReservationDetail from "../../components/Home/ReserveCarDetailFormat";

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