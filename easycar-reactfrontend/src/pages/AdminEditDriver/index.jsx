import {Component, Fragment} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultAdmin from "../../components/Pages/AdminDashBoardFormat";
import DefaultCarAdd from "../../components/Pages/AdminAddCarFormat";
import DefaultEditCar from "../../components/Pages/AdminEditCarFormat";
import DefaultDriverEdit from "../../components/Pages/AdminEditDriverFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultDriverEdit></DefaultDriverEdit>
            </Fragment>
        )
    }
}

export default HomePage