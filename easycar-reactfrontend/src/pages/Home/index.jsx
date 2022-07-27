import {Component, Fragment} from "react";
import Default from "../../components/Pages/HomeFormat";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Default></Default>
            </Fragment>
        )
    }
}

export default HomePage