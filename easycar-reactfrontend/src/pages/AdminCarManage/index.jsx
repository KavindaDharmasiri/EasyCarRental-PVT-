import {Component, Fragment} from "react";
import Default from "../../components/Home/HomeFormat";
import DefaultAdmin from "../../components/Home/AdminDashBoardFormat";
import DefaultCarManage from "../../components/Home/AdminCarManageFormat";

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