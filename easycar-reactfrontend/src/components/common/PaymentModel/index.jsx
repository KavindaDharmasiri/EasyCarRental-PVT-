import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, Row} from 'antd';
import {Link, useLocation} from "react-router-dom";

import car_img from "../../../assets/img/car.jpg";

class PaymentModel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;

        const queryParams = new URLSearchParams(window.location.search)
        const name = queryParams.get("name")

        let b = false;
        if(name=="Booking"){
            b=true;
        }

        const renderAuthButton2 = () => {
            if (b) {
                return <button style={style.btn2}><Link to={'/bookingCarDet'} style={style.aTag}>Cancel</Link></button>

            } else {

                return <button style={style.btn2}><Link to={'/resCarDet'} style={style.aTag}>Cancel</Link></button>
            }
        }

        const renderAuthButton = () => {
            if (b) {
                return <button style={style.btn1}><Link to={'/bookingCar'} style={style.aTag}>Submit</Link></button>


            } else {

                return <button style={style.btn1}><Link to={'/reservation'} style={style.aTag}>Submit</Link></button>

            }
        }

        return (

            <div style={style.login}>
                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.carImage}>
                        <img src={car_img} alt=""/>
                        <h1 style={style.loginLogo}>Easy Car Rental(PVT)</h1>
                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm}>
                            <h1 style={style.upH1}>Payment Window for {name}</h1>

                            <Form.Item name={"cardHolderName"} label={"Card Holder Name"} rules={[{require: true}]}>
                                <Input style={style.input}/>
                            </Form.Item>

                            <Form.Item name={"cNumber"} label={"Card Number"} rules={[{require: true}]}>
                                <Input style={style.input}/>
                            </Form.Item>

                            <Form.Item name={"date"} label={"Date"} rules={[{require: true}]}>

                                <Input style={style.input}/>
                            </Form.Item>

                            <Form.Item name={"cvv"} label={"CVV"} rules={[{require: true}]}>
                                <Input style={style.input}/>
                            </Form.Item>


                            {renderAuthButton()}
                            {renderAuthButton2()}


                        </Form>
                    </Col>
                </Row>
            </div>


        )
    }

}

export default withStyles(style)(PaymentModel)