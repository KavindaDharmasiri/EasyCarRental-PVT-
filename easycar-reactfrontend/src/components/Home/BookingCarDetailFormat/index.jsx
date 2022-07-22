import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, DatePicker, Divider, Form, Row, Space} from 'antd';
import car_img from "../../../assets/img/car.jpg";
import {Link} from "react-router-dom";
import PaymentModel from "../../common/PaymentModel";
import GetService from "../../../services/GetService";
import moment from 'moment'

const { RangePicker } = DatePicker;



let regNo;
let price;
let id = null;
let image1;
let i;


class DefaultBookingDetail extends Component {
    constructor(props) {
        super(props);


        this.state = {
            data:[],
            alert: false,
            message: '',
            severity: '',
            id:'',
            ttl: ''
        }
    }

    componentDidMount() {
        let link = window.location.href

        regNo = String(link.slice(39,43));

        id = String(link.slice(50));
        console.log(id)
        console.log(regNo)
        this.initializee(regNo)

    }

    async initializee(regNo) {
        let res = await GetService.fetchAllCar();

        for (let i=0 ;i<res.data.data.length;i++){
            if (res.data.data[i].registrationNo=== regNo){

                console.log(res.data.data[i])
                this.setState({
                    data: res.data.data[i]
                })

                price=res.data.data[i].priceForRent
                image1 = res.data.data[i].image1
            }
        }

        if (res.status === 200) {


        } else {
            console.log("fetching error: " + res)
        }
    }

    selectTimeslots(values){
        let oneDate = parseInt(moment(values[0].format('MMM DD YYYY HH:MM')).date())

        let oneHour = parseInt(moment(values[0].format('MMM DD YYYY HH:MM')).hour())

        let twoDate = parseInt(moment(values[1].format('MMM DD YYYY HH:MM')).date())

        let twoHour = parseInt(moment(values[1].format('MMM DD YYYY HH:MM')).hour())

        console.log(price)
        let te = 24 - oneHour;
        let te2 = 24 - twoHour;

        i =((twoDate-oneDate-1)*24+te+te2)*price


        document.getElementById("ttlId").innerText = ((twoDate-oneDate-1)*24+te+te2)*price

    }

    render() {
        const {classes} = this.props;

        const cars = this.state.data

        const image2 = cars.image2
        console.log(image1)

        if (id !== null) {
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

                        <h1 style={style.upH1}>Booking Car</h1>

                        <div style={style.login}>
                            <Row className={'d-flex align-items-center'}>

                                <Col lg={16} style={style.carImage}>
                                    <div style={style.separate}>
                                        <img style={style.image} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+cars.image1)} alt=""/>
                                        <img style={style.image} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+cars.image2)} alt=""/>

                                    </div>
                                    <br/>
                                    <div style={style.separate}>
                                        <img style={style.image} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+cars.image3)} alt=""/>
                                        <img style={style.image} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+cars.image4)} alt=""/>
                                    </div>

                                </Col>

                                <Col lg={8}>

                                    <Divider type={'horizontal'} dashed style={style.divider}>Car Information</Divider>
                                    <Form layout={"horizontal"} style={style.loginForm}>

                                        <label>Vehicle register no : <label
                                            style={style.secondLbl}>{cars.registrationNo}</label></label><br/>
                                        <label>Brand : <label style={style.secondLbl}>{cars.brand}</label></label><br/>
                                        {/*<img style={style.image} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+cars.image2)} alt=""/>*/}
                                        <label>Color : <label style={style.secondLbl}>{cars.colour}</label></label><br/>
                                        <label>Fuel : <label style={style.secondLbl}>{cars.fuel}</label></label><br/>
                                        <label>No of Passengers : <label
                                            style={style.secondLbl}>{cars.noOfPassenger}</label></label><br/>
                                        <label>Price for rent : <label
                                            style={style.secondLbl}>{cars.priceForRent}/-</label></label><br/>
                                        <label>Transmission : <label style={style.secondLbl}>{cars.transmission}</label></label><br/>
                                        <label>Type : <label style={style.secondLbl}>{cars.type}</label></label><br/>


                                    </Form>

                                    <Divider type={'horizontal'} dashed style={style.divider}>Booking
                                        Information</Divider>
                                    <Form layout={"horizontal"} style={style.loginForm}>

                                        <label>userId : <label style={style.secondLbl}>{id}</label></label><br/>
                                        <label>paymentId : <label style={style.secondLbl}>res</label></label><br/>
                                        <label>type : <label style={style.secondLbl}>Booking</label></label><br/>
                                        <label>vehicle register number : <label
                                            style={style.secondLbl}>{cars.registrationNo}</label></label><br/>


                                        <label>Start & End date</label><br/>
                                        <RangePicker onChange={this.selectTimeslots} showTime={{format: 'HH:MM'}}
                                                     format='MMM DD YYYY HH:MM'/><br/>

                                        <label>Total : <label id={'ttlId'} style={style.secondLbl}>res
                                            /-</label></label><br/>


                                        <button style={style.btn1}><Link to={'/paymentmdl?name=Booking'}>Book Car</Link>
                                        </button>


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

export default withStyles(style)(DefaultBookingDetail)