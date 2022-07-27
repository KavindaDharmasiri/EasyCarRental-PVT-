import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Divider} from "antd";
import GetService from "../../../services/GetService";

let regNo;

class DefaultRentAndBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataTwo: [],
            id: ''
        }
    }

    async loadData() {
        let res = await GetService.fetchAllRent();
        let temp = [];
        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].userId === regNo) {
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

    async loadReserData() {
        let res = await GetService.fetchAllReservation();
        let temp = [];
        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].userId === regNo) {
                temp.push(res.data.data[i])
            }
        }

        this.setState({
            dataTwo: temp
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async componentDidMount() {
        let link = window.location.href
        regNo = String(link.slice(40));

        this.setState({
            id: regNo
        })

        this.loadData()
        this.loadReserData()

    }


    render() {
        const {classes} = this.props;

        const rents = this.state.data
        const reservations = this.state.dataTwo

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

                <Divider type={'horizontal'} dashed style={style.divider}>Your Booking Details</Divider>

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
                        {rents.map((rent) =>
                            <tr>
                                <td style={style.td}>{rent.paymentId}</td>
                                <td style={style.td}>{rent.date}</td>
                                <td style={style.td}>{rent.type}</td>
                                <td style={style.td}>{rent.vehicleRegistrationNo}</td>
                                <td style={style.td}>{rent.total}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>

                <br/><br/><br/><br/><br/>

                <Divider type={'horizontal'} dashed style={style.divider}>Your Reservation Details</Divider>

                <div style={style.appcontainer}>
                    <table style={style.table}>
                        <thead>
                        <tr>
                            <th style={style.th}>PaymentId</th>
                            <th style={style.th}>DriverId</th>
                            <th style={style.th}>Date</th>
                            <th style={style.th}>Type</th>
                            <th style={style.th}>vehicleRegisterNo</th>
                            <th style={style.th}>total</th>
                        </tr>

                        </thead>
                        <tbody>
                        {reservations.map((reservation) =>
                            <tr>
                                <td style={style.td}>{reservation.paymentId}</td>
                                <td style={style.td}>{reservation.driverId}</td>
                                <td style={style.td}>{reservation.date}</td>
                                <td style={style.td}>{reservation.type}</td>
                                <td style={style.td}>{reservation.vehicleRegistrationNo}</td>
                                <td style={style.td}>{reservation.total}</td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default withStyles(style)(DefaultRentAndBooking)
