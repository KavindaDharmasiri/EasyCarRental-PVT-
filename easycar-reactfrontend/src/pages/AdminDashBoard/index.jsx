import {Component, Fragment} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultAdmin from "../../components/Pages/AdminDashBoardFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <DefaultAdmin></DefaultAdmin>
            </Fragment>
        )
    }
}

export default HomePage