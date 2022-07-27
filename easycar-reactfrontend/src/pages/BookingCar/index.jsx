import {Component} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultBooking from "../../components/Pages/BookingCarFormat";

class BookingCar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultBooking></DefaultBooking>
        )
    }
}

export default BookingCar