import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Divider} from "antd";
import GetService from "../../../services/GetService";

let regNo;

class DriverLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            id: ''
        }
    }

    async loadReserData() {
        let res = await GetService.fetchAllReservation();
        let temp = [];
        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].driverId === regNo) {
                temp.push(res.data.data[i])
            }
        }

        this.setState({
            data: temp
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async componentDidMount() {
        let link = window.location.href
        regNo = String(link.slice(36));

        this.setState({
            id: regNo
        })

        this.loadReserData()

    }


    render() {
        const {classes} = this.props;

        const drivers = this.state.data

        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>
                            <h3>{this.state.id}</h3>
                        </div>
                    </div>
                </div>

                <Divider type={'horizontal'} dashed style={style.divider}>Your Reservation Details</Divider>

                <div style={style.appcontainer}>
                    <table style={style.table}>
                        <thead>
                        <tr>
                            <th style={style.th}>PaymentId</th>
                            <th style={style.th}>Date</th>
                            <th style={style.th}>Type</th>
                            <th style={style.th}>vehicleRegisterNo</th>
                            <th style={style.th}>total</th>
                        </tr>

                        </thead>
                        <tbody>
                        {drivers.map((driver) =>
                            <tr>
                                <td style={style.td}>{driver.paymentId}</td>
                                <td style={style.td}>{driver.date}</td>
                                <td style={style.td}>{driver.type}</td>
                                <td style={style.td}>{driver.vehicleRegistrationNo}</td>
                                <td style={style.td}>{driver.total}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
}

export default withStyles(style)(DriverLogin)
