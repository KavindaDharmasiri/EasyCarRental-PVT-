import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, DatePicker, Divider, Form, Row} from 'antd';
import car_img from "../../../assets/img/car.jpg";
import {Link} from "react-router-dom";
import PaymentModel from "../../common/PaymentModel";

const RangePicker = DatePicker

class DefaultBookingDetail extends Component {
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

                    <h1 style={style.upH1}>Booking Car</h1>

                    <div style={style.login}>
                        <Row className={'d-flex align-items-center'}>

                            <Col lg={16} style={style.carImage}>
                                <div style={style.separate}>
                                    <img style={style.image} src={car_img} alt=""/>
                                    <img style={style.image} src={car_img} alt=""/>
                                </div>
                                <br/>
                                <div style={style.separate}>
                                    <img style={style.image} src={car_img} alt=""/>
                                    <img style={style.image} src={car_img} alt=""/>
                                </div>

                            </Col>

                            <Col lg={8}>

                                <Divider type={'horizontal'} dashed style={style.divider}>Car Information</Divider>
                                <Form layout={"horizontal"} style={style.loginForm}>

                                    <label>Vehicle register no : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>Brand : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>Color : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>Fuel : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>No of Passengers : <label style={style.secondLbl}>res /-</label></label><br/>
                                    <label>Price for rent : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>Transmission : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>Type : <label style={style.secondLbl}>res /-</label></label><br/>
                                    <label>Availability : <label style={style.secondLbl}>res /-</label></label><br/>


                                </Form>

                                <Divider type={'horizontal'} dashed style={style.divider}>Booking Information</Divider>
                                <Form layout={"horizontal"} style={style.loginForm}>

                                    <label>userId : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>paymentId : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>type : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>vehicle register number : <label
                                        style={style.secondLbl}>res</label></label><br/>

                                    <label>borrow date</label><br/>
                                    <RangePicker showTime={{format: 'HH:MM'}} format='MMM DD YYYY HH:MM'/><br/>

                                    <label>End date</label><br/>
                                    <RangePicker showTime={{format: 'HH:MM'}} format='MMM DD YYYY HH:MM'/><br/>

                                    <label>Total : <label style={style.secondLbl}>res /-</label></label><br/>


                                    <button style={style.btn1} ><Link to={'/paymentmdl?name=Booking'}>Book Car</Link></button>


                                </Form>
                            </Col>
                        </Row>
                    </div>

                </div>


                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>

        )
    }

}

export default withStyles(style)(DefaultBookingDetail)