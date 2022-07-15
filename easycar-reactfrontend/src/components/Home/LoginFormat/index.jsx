import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import car_img from "../../../assets/img/car.jpg";

import {Row , Col , Form , Input} from 'antd'
import {Link} from "react-router-dom";

class DefaultLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div style={style.login}>
                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.carImage}>
                        <img src={car_img} alt=""/>
                        <h1 style={style.loginLogo}>Easy Car Rental(PVT)</h1>

                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm}>
                            <h1 style={style.colourLable}>Login</h1>
                            <hr/>

                            <Form.Item name={"username"} label={"username"} rules={[{require: true}]} >
                                <Input  style={style.input}/>
                            </Form.Item>

                            <Form.Item name={"password"} label={"password"} rules={[{require: true}]} >
                                <Input  style={style.input}/>
                            </Form.Item>

                            <button style={style.btn1}>Login</button>

                            <br/>
                            <Link style={style.aTag} to='/register'>Click Here to Register</Link>
                        </Form>
                    </Col>
                </Row>
            </div>

        )
    }

}

export default withStyles(style)(DefaultLogin)