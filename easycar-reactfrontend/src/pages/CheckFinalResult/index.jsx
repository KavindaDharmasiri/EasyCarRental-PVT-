import {Component, Fragment} from "react";
import DefaultAdminRentAndBooking from "../../components/Pages/AdminReservationAndBookinFormat";
import CheckFinalReport from "../../components/Pages/CheckFinalResultFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CheckFinalReport>
            </CheckFinalReport>
        )
    }
}

export default HomePage