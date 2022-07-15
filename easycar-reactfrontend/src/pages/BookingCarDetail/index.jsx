import {Component} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultBooking from "../../components/Home/BookingCarFormat";
import DefaultBookingDetail from "../../components/Home/BookingCarDetailFormat";

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