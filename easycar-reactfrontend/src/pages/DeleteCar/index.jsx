import {Component, Fragment} from "react";
import DefaultAdminRentAndBooking from "../../components/Home/AdminReservationAndBookinFormat";
import CheckFinalReport from "../../components/Home/CheckFinalResultFormat";
import DeleteCar from "../../components/Home/DeleteCarForm";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DeleteCar>
            </DeleteCar>
        )
    }
}

export default HomePage