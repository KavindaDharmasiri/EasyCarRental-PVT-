import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import car_logo from "../../../assets/img/carManage.png";
import driver_logo from "../../../assets/img/driverManage.jpg";
import payment_logo from "../../../assets/img/payment.jpg";
import restReservation_logo from "../../../assets/img/rent&reservation.jpeg";
import {Link} from "react-router-dom";

class DefaultAdmin extends Component {
    constructor(props) {
        super(props);
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


                <div>
                    <Row justify={"center"} >
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
                                        <div style={style.rightAlign} >
                                            <button style={style.btn1}><Link to={'/carManage'}>Car Manage</Link></button>
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
                                            <div style={style.rightAlign} >
                                                <button style={style.btn1}><Link to={'/driverManage'}>Driver Manage</Link></button>
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
                                            <div style={style.rightAlign} >
                                                <button style={style.btn1}><Link to={'/adminpanelbookingandreservation'}>Watch Now</Link></button>
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
                                            <div style={style.rightAlign} >
                                                <button style={style.btn1}><Link to={'/finalReport'}>Watch Now</Link></button>
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