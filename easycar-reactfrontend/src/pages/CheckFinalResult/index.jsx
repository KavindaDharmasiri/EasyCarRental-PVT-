import {Component, Fragment} from "react";
import DefaultAdminRentAndBooking from "../../components/Home/AdminReservationAndBookinFormat";
import CheckFinalReport from "../../components/Home/CheckFinalResultFormat";

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