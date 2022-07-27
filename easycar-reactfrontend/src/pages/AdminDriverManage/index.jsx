import {Component, Fragment} from "react";
import Default from "../../components/Pages/HomeFormat";
import DefaultAdmin from "../../components/Pages/AdminDashBoardFormat";
import DefaultCarManage from "../../components/Pages/AdminCarManageFormat";
import DefaultDriverManage from "../../components/Pages/AdminDriverManageFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DefaultDriverManage>
            </DefaultDriverManage>
        )
    }
}

export default HomePage