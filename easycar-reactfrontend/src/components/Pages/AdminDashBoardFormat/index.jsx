import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import car_logo from "../../../assets/img/carManage.png";
import vehicle_logo from "../../../assets/img/vehicle.png";
import drivers_logo from "../../../assets/img/driver.jpg";
import user_logo from "../../../assets/img/user.png";
import driver_logo from "../../../assets/img/driverManage.jpg";
import payment_logo from "../../../assets/img/payment.jpg";
import restReservation_logo from "../../../assets/img/rent&reservation.jpeg";
import {Link} from "react-router-dom";
import GetService from "../../../services/GetService";

class DefaultAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            driver: '',
            vehicle: ''
        }
    }

    componentDidMount() {
        this.loadUsers();
        this.loadDrivers();
        this.loadVehicles();
    }

    async loadUsers() {
        let res = await GetService.getAllUser();

        console.log(res.data.data.length)
        this.setState({
            user: res.data.data.length
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async loadDrivers() {
        let res = await GetService.fetchAllDrivers();

        console.log(res.data.data.length)
        this.setState({
            driver: res.data.data.length
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async loadVehicles() {
        let res = await GetService.fetchAllCar();

        console.log(res.data.data.length)
        this.setState({
            vehicle: res.data.data.length
        })

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    render() {
        const {classes} = this.props;

        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">
                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>
                        </div>
                    </div>
                </div>


                <div >
                    <Row justify={"center"}>
                        <Col style={style.col}>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car} onMouseMove={style.carHover}>

                                        <img src={car_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Manage Car</p>
                                                <p style={style.paragraph}>Click For Manage</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link to={'/carManage'}>Car Manage</Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={driver_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Manage Drivers</p>
                                                <p style={style.paragraph}>Click For Manage Drivers</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link to={'/driverManage'}>Driver
                                                    Manage</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={restReservation_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>See Reservations / Booking</p>
                                                <p style={style.paragraph}>Click For Watch</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link
                                                    to={'/adminpanelbookingandreservation'}>Watch Now</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={payment_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>See Payment Report</p>
                                                <p style={style.paragraph}>Click For Watch</p>
                                            </div>
                                            <div style={style.rightAlign}>
                                                <button style={style.btn1}><Link to={'/finalReport'}>Watch Now</Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row justify={"center"}>
                        <Col style={style.col}>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car} onMouseMove={style.carHover}>

                                        <img src={user_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph2}>User Count</p>
                                                <p style={style.paragraph2}>{this.state.user}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={drivers_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph2}>Driver Count</p>
                                                <p style={style.paragraph2}>{this.state.driver}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={vehicle_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph2}>Vehicle Count</p>
                                                <p style={style.paragraph2}>{this.state.vehicle}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>
                </div>

                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>

        )
    }
}

export default withStyles(style)(DefaultAdmin)