import {Component, Fragment} from "react";
import DefaultAdminRentAndBooking from "../../components/Pages/AdminReservationAndBookinFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultAdminRentAndBooking>
            </DefaultAdminRentAndBooking>
        )
    }
}

export default HomePage