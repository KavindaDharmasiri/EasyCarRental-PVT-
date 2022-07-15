import {Component, Fragment} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultAdmin from "../../components/Home/AdminDashBoardFormat";
import DefaultCarAdd from "../../components/Home/AdminAddCarFormat";
import DefaultDriverAdd from "../../components/Home/AdminAddDriverFormat";

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