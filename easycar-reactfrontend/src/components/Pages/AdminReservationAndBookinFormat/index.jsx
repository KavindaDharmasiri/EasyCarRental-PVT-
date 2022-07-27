import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Divider} from "antd";
import GetService from "../../../services/GetService";

class DefaultAdminRentAndBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data1: [],
            data2: []
        }
    }

    async loadData() {
        let res = await GetService.fetchAllReservation();

        this.setState({
            data1: res.data.data
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async loadrentData() {
        let res = await GetService.fetchAllRent();

        this.setState({
            data2: res.data.data
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async componentDidMount() {
        this.loadData()
        this.loadrentData()
    }

    render() {
        const {classes} = this.props;

        const reservations = this.state.data1
        const rents = this.state.data2

        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>
                        </div>
                    </div>
                </div>

                <Divider type={'horizontal'} dashed style={style.divider}>Booking Details</Divider>

                <div style={style.appcontainer}>
                    <table style={style.table}>
                        <thead>
                        <tr>
                            <th style={style.th}>DriverId</th>
                            <th style={style.th}>PaymentId</th>
                            <th style={style.th}>ReleventDate</th>
                            <th style={style.th}>Type</th>
                            <th style={style.th}>VehicleRegistrationNo</th>
                            <th style={style.th}>Total</th>

                        </tr>

                        </thead>
                        <tbody>
                        {reservations.map((reservation) =>
                            <tr>
                                <td style={style.td}>{reservation.driverId}</td>
                                <td style={style.td}>{reservation.paymentId}</td>
                                <td style={style.td}>{reservation.releventDate}</td>
                                <td style={style.td}>{reservation.type}</td>
                                <td style={style.td}>{reservation.vehicleRegistrationNo}</td>
                                <td style={style.td}>{reservation.total}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>

                <br/><br/><br/><br/><br/>

                <Divider type={'horizontal'} dashed style={style.divider}>Rent Details</Divider>

                <div style={style.appcontainer}>
                    <table style={style.table}>
                        <thead>
                        <tr>
                            <th style={style.th}>UserId</th>
                            <th style={style.th}>PaymentId</th>
                            <th style={style.th}>ReleventDate</th>
                            <th style={style.th}>Type</th>
                            <th style={style.th}>VehicleRegistrationNo</th>
                            <th style={style.th}>Total</th>
                        </tr>

                        </thead>
                        <tbody>
                        {rents.map((rent) =>
                            <tr>
                                <td style={style.td}>{rent.userId}</td>
                                <td style={style.td}>{rent.paymentId}</td>
                                <td style={style.td}>{rent.releventDate}</td>
                                <td style={style.td}>{rent.type}</td>
                                <td style={style.td}>{rent.vehicleRegistrationNo}</td>
                                <td style={style.td}>{rent.total}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(DefaultAdminRentAndBooking)