import {Component} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultBooking from "../../components/Home/BookingCarFormat";

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