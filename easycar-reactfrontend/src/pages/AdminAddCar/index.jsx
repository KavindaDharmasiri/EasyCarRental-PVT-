import {Component, Fragment} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultAdmin from "../../components/Home/AdminDashBoardFormat";
import DefaultCarAdd from "../../components/Home/AdminAddCarFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultCarAdd></DefaultCarAdd>
            </Fragment>
        )
    }
}

export default HomePage