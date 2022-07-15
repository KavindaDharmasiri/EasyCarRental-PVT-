import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import book_logo from "../../../assets/img/book.jpg";
import resp_logo from "../../../assets/img/rent.jpg";
import restReservation_logo from "../../../assets/img/rent&reservation.jpeg";
import {Link} from "react-router-dom";

class Default extends Component {
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

                                    <img src={book_logo} style={style.dashboardImg} alt=""/>
                                    <div style={style.imgContent}>
                                        <div>
                                            <p style={style.paragraph}>Book Car</p>
                                            <p style={style.paragraph}>Click For Book</p>
                                        </div>
                                        <div style={style.rightAlign} >
                                            <button style={style.btn1}><Link to={'/bookingCar'}>Book Now</Link></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={resp_logo} style={style.dashboardImg} alt=""/>
                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Get Car With Driver</p>
                                                <p style={style.paragraph}>Click For Get</p>
                                            </div>
                                            <div style={style.rightAlign} >
                                                <button style={style.btn1}><Link to={'/reservation'}>Book Now</Link></button>
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
                                                <p style={style.paragraph}>Your Reservations / Booking</p>
                                                <p style={style.paragraph}>Click For Watch</p>
                                            </div>
                                            <div style={style.rightAlign} >
                                                <button style={style.btn1}><Link to={'/rentAndBookDet'}>Watch Now</Link></button>
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

export default withStyles(style)(Default)