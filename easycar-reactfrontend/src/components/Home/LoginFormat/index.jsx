import {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import car_img from "../../../assets/img/car.jpg";

import {Col, Form, Input, Row} from 'antd'
import GetService from "../../../services/GetService";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Routes
} from "react-router-dom";


let pass;
let nam;
let iddd;
let typ;

function load() {
    if(typ === "Admin"){
        const newWindow = window.open('http://localhost:3000/adminHome?id=' + iddd, '_self', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }else {
        const newWindow = window.open('http://localhost:3000/firstPage?id=' + iddd, '_self', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
}

class DefaultLogin extends Component {
    constructor(props) {
        super(props);

    }

    submit = () => {
        return <button><Link>confirm</Link></button>
    };

    async buttonHandler() {

        let res = await GetService.getAllUser();

        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].name === nam) {
                 if (res.data.data[i].password === pass) {
                    iddd= res.data.data[i].id
                     typ = res.data.data[i].type
                    console.log(iddd)
                    console.log('password')

                     load()
                }
            }
        }

        if (res.status === 201) {

        } else {

        }

    }

    render() {
        const {classes} = this.props;


        const changeevent = event => {
            pass = event.target.value
        }

        const changeEventTwo = event => {
            nam = event.target.value
        }

        return (
            <div style={style.login}>

                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.carImage}>
                        <img src={car_img} alt=""/>
                        <h1 style={style.loginLogo}>Easy Car Rental(PVT)</h1>

                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm} onChange={this.buttonHandler}>
                            <h1 style={style.colourLable}>Login</h1>
                            <hr/>

                            <Form.Item name={"username"} label={"username"} rules={[{require: true}]}>
                                <Input style={style.input} onChange={changeEventTwo}/>
                            </Form.Item>

                            <Form.Item name={"password"} label={"password"}  rules={[{require: true}]}>
                                <Input type={"password"} style={style.input} onChange={changeevent}/>
                            </Form.Item>

                            <button style={style.btn1} onClick={this.buttonHandler}>Login</button>
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