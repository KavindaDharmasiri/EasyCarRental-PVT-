import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import DeleteService from "../../../services/DeleteService";
import {message} from "antd";

class DeleteCar extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let link = window.location.href

        let regNo;
        regNo = String(link.slice(35));

        console.log(regNo)

        this.initializee(regNo)

    }

    async initializee(regNo) {
        let res = await DeleteService.deleteCarCar(regNo);

        if (res.status === 200) {

            setTimeout(()=>{
                message.error('Register Failed!!')
            },2000);

            const newWindow = window.open('http://localhost:3000/carManage' , '_self', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null

        } else {
            console.log("fetching error: " + res)
        }
    }


    render() {
        const {classes} = this.props;
        return (

            <div>

            </div>

        )
    }

}

export default withStyles(style)(DeleteCar)