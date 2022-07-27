import {Component, Fragment} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultAdmin from "../../components/Pages/AdminDashBoardFormat";
import DefaultCarManage from "../../components/Pages/AdminCarManageFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultCarManage>
            </DefaultCarManage>
        )
    }
}

export default HomePage