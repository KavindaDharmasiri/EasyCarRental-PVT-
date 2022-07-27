import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, DatePicker, Divider, Form, message, Row} from 'antd';
import {Link} from "react-router-dom";
import GetService from "../../../services/GetService";
import moment from 'moment'
import PostService from "../../../services/PostService";

const {RangePicker} = DatePicker;

let regNo;
let price;
let id = null;
let image1;
let i;
let da;

class DefaultReservationDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                paymentId: '',
                date: '',
                total: '',
                userId: '',
                vehicleRegistrationNo: ''

            },
            formData2: {
                paymentId: '',
                date: '',
                total: '',
                driverId: '',
                type: 'Reservation',
                userId: '',
                vehicleRegistrationNo: ''
            },
            data: [],
            alert: false,
            message: '',
            severity: '',
            id: '',
            ttl: '',
            dataTwo: [],
            newId: '',
            date: '',
            tttl: '',
            dId: ''
        }
    }

    componentDidMount() {
        let link = window.location.href
        regNo = String(link.slice(35, 39));
        id = String(link.slice(46));
        this.initializee(regNo)
        this.getAllPayments()
    }

    async getAllPayments() {
        let res = await GetService.fetchAllPayments();

        this.setState({
            dataTwo: res.data.data[res.data.data.length - 1]
        })

        if (res.status === 200) {
            this.setId(res.data.data[res.data.data.length - 1])

        } else {
            console.log("fetching error: " + res)

            this.setId(res.data.data[res.data.data.length - 1])
        }
    }

    setId(tr) {

        let teId = 'P001';

        this.setState({
            newId: teId
        })

        let tempone = tr.paymentId

        let temp = parseInt(tempone.slice(1))

        if (temp < 1) {
            teId = 'P001'
        } else if (temp < 9) {
            teId = 'P00' + (temp + 1)
        } else if (temp < 99) {
            teId = 'P0' + (temp + 1)
        } else if (temp < 999) {
            teId = 'P' + (temp + 1)
        } else {
            teId = 'P001'
        }

        this.setState({
            newId: teId
        })
    }

    async getDriver() {
        let res = await GetService.fetchAllDrivers();

        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].vehicleRegistrationNo === this.state.data.vehicleRegistrationNo) {
                this.setState({
                    dId: res.data.data[i].id
                })
                return
            }
        }

        this.setState({
            dataDri: res.data.data
        })

        if (res.status === 200) {
            this.getCars()

        } else {
            console.log("fetching error: " + res)
            this.getCars()
        }
    }

    async initializee(regNo) {
        let res = await GetService.fetchAllCar();

        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].registrationNo === regNo) {

                this.setState({
                    data: res.data.data[i]
                })

                price = res.data.data[i].priceForRent
                image1 = res.data.data[i].image1
            }
        }

        if (res.status === 200) {
            this.getDriver()

        } else {
            this.getDriver()
            console.log("fetching error: " + res)
        }
    }

    async selectTimeslots(values) {
        let oneDate = parseInt(moment(values[0].format('MMM DD YYYY HH:MM')).date())

        let oneHour = parseInt(moment(values[0].format('MMM DD YYYY HH:MM')).hour())

        let twoDate = parseInt(moment(values[1].format('MMM DD YYYY HH:MM')).date())

        let twoHour = parseInt(moment(values[1].format('MMM DD YYYY HH:MM')).hour())

        let te = 24 - oneHour;
        let te2 = 24 - twoHour;

        i = ((twoDate - oneDate - 1) * 24 + te + te2) * price

        da = 'start 2022-08-' + oneDate + ' end 2022-08-' + twoDate

        document.getElementById("ttlId").innerText = ((twoDate - oneDate - 1) * 24 + te + te2) * price
    }

    savePayment = async value => {
        let response = await PostService.createPostPayment(this.state.formData);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })

            this.saveReser()

        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })

            this.saveReser()
        }
    }

    saveReser = async () => {
        let response = await PostService.createPostReservation(this.state.formData2);
        if (response.status === 201) {
            this.setState({
                alert: true,
                message: 'Post created succesfully!',
                severity: 'success'
            })

            setTimeout(() => {
                message.success('button Open Success!!')
            }, 2000);

            const newWindow = window.open('http://localhost:3000/paymentmdl?name=Reservation', '_self', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null

        } else {
            this.setState({
                alert: true,
                message: 'Post created Unsuccesfully!',
                severity: 'error'
            })

            setTimeout(() => {
                message.error('button Open Unsuccessful!!')
            }, 2000);
        }
    }

    setpayment = async () => {

        let tre = id;
        this.state.formData.paymentId = this.state.newId
        this.state.formData.date = da
        this.state.formData.total = i
        this.state.formData.userId = id
        this.state.formData.vehicleRegistrationNo = regNo

        this.state.formData2.paymentId = this.state.newId
        this.state.formData2.date = da
        this.state.formData2.total = i
        this.state.formData2.type = 'Reservation'
        this.state.formData2.driverId = this.state.dId
        this.state.formData2.userId = tre
        this.state.formData2.vehicleRegistrationNo = regNo

        this.savePayment()
    };

    render() {

        if (id !== null) {
            const {classes} = this.props;

            const cars = this.state.data

            return (

                <div style={style.body}>
                    <div style={style.bs1}>
                        <div className="header" style={style.header}>
                            <div className="d-flex justify-content-between">
                                <h1 style={style.h1}>Easy Car Rental(PVT)</h1>
                                <h3>{id}</h3>
                            </div>
                        </div>
                    </div>

                    <div>

                        <h1 style={style.upH1}>Reservation Car</h1>

                        <div style={style.login}>
                            <Row className={'d-flex align-items-center'}>

                                <Col lg={16} style={style.carImage}>
                                    <div style={style.separate}>
                                        <img style={style.image}
                                             src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + cars.image1)}
                                             alt=""/>
                                        <img style={style.image}
                                             src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + cars.image2)}
                                             alt=""/>

                                    </div>
                                    <br/>
                                    <div style={style.separate}>
                                        <img style={style.image}
                                             src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + cars.image3)}
                                             alt=""/>
                                        <img style={style.image}
                                             src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + cars.image4)}
                                             alt=""/>
                                    </div>

                                </Col>

                                <Col lg={8}>

                                    <Divider type={'horizontal'} dashed style={style.divider}>Car Information</Divider>
                                    <Form layout={"horizontal"} style={style.loginForm}>

                                        <label>Vehicle register no : <label
                                            style={style.secondLbl}>{cars.registrationNo}</label></label><br/>
                                        <label>Brand : <label style={style.secondLbl}>{cars.brand}</label></label><br/>
                                        <label>Color : <label style={style.secondLbl}>{cars.colour}</label></label><br/>
                                        <label>Fuel : <label style={style.secondLbl}>{cars.fuel}</label></label><br/>
                                        <label>No of Passengers : <label
                                            style={style.secondLbl}>{cars.noOfPassenger}</label></label><br/>
                                        <label>Price for rent : <label
                                            style={style.secondLbl}>{cars.priceForRent}/-</label></label><br/>
                                        <label>Transmission : <label style={style.secondLbl}>{cars.transmission}</label></label><br/>
                                        <label>Type : <label style={style.secondLbl}>{cars.type}</label></label><br/>

                                    </Form>

                                    <Divider type={'horizontal'} dashed style={style.divider}>Reservation
                                        Information</Divider>
                                    <Form layout={"horizontal"} style={style.loginForm}>

                                        <label>userId : <label style={style.secondLbl}>{id}</label></label><br/>
                                        <label>driverId : <label
                                            style={style.secondLbl}>{this.state.dId}</label></label><br/>
                                        <label>paymentId : <label
                                            style={style.secondLbl}>{this.state.newId}</label></label><br/>
                                        <label>type : <label style={style.secondLbl}>Booking</label></label><br/>
                                        <label>vehicle register number : <label
                                            style={style.secondLbl}>{cars.registrationNo}</label></label><br/>

                                        <label>Start & End date</label><br/>
                                        <RangePicker onChange={this.selectTimeslots} showTime={{format: 'HH:MM'}}
                                                     format='MMM DD YYYY HH:MM'/><br/>

                                        <label>Total : <label id={'ttlId'} style={style.secondLbl}>total
                                            /-</label></label><br/>

                                        <button style={style.btn1} onClick={this.setpayment}>Reserve Car</button>
                                        <br/>

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
}

export default withStyles(style)(DefaultReservationDetail)