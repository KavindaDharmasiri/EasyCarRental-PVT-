import {Component, Fragment} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultAdmin from "../../components/Home/AdminDashBoardFormat";
import DefaultCarAdd from "../../components/Home/AdminAddCarFormat";
import DefaultEditCar from "../../components/Home/AdminEditCarFormat";
import DefaultDriverEdit from "../../components/Home/AdminEditDriverFormat";

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