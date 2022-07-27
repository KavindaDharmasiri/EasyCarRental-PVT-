import {Component, Fragment} from "react";
import DefaultAdminRentAndBooking from "../../components/Pages/AdminReservationAndBookinFormat";
import CheckFinalReport from "../../components/Pages/CheckFinalResultFormat";
import DriverLogin from "../../components/Pages/DriverHomePage";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DriverLogin>
            </DriverLogin>
        )
    }
}

export default HomePage