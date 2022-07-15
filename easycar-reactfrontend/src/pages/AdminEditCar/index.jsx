import {Component, Fragment} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultAdmin from "../../components/Home/AdminDashBoardFormat";
import DefaultCarAdd from "../../components/Home/AdminAddCarFormat";
import DefaultEditCar from "../../components/Home/AdminEditCarFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultEditCar></DefaultEditCar>
            </Fragment>
        )
    }
}

export default HomePage