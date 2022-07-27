import {Component, Fragment} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultAdmin from "../../components/Pages/AdminDashBoardFormat";
import DefaultCarAdd from "../../components/Pages/AdminAddCarFormat";
import DefaultDriverAdd from "../../components/Pages/AdminAddDriverFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultDriverAdd></DefaultDriverAdd>
            </Fragment>
        )
    }
}

export default HomePage