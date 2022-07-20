import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, DatePicker, Divider, Form, Row} from 'antd';
import car_img from "../../../assets/img/car.jpg";
import {Link} from "react-router-dom";
import PaymentModel from "../../common/PaymentModel";
import GetService from "../../../services/GetService";

const RangePicker = DatePicker
let regNo;

let id;

class DefaultBookingDetail extends Component {
    constructor(props) {
        super(props);


        this.state = {
            data:[],
            alert: false,
            message: '',
            severity: '',
            id:''
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


            }
        }

        if (res.status === 200) {


        } else {
            console.log("fetching error: " + res)
        }
    }

    render() {
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

                                    <label>Vehicle register no : <label style={style.secondLbl}>{cars.registrationNo}</label></label><br/>
                                    <label>Brand : <label style={style.secondLbl}>{cars.brand}</label></label><br/>
                                    <label>Color : <label style={style.secondLbl}>{cars.colour}</label></label><br/>
                                    <label>Fuel : <label style={style.secondLbl}>{cars.fuel}</label></label><br/>
                                    <label>No of Passengers : <label style={style.secondLbl}>{cars.noOfPassenger}</label></label><br/>
                                    <label>Price for rent : <label style={style.secondLbl}>{cars.priceForRent}/-</label></label><br/>
                                    <label>Transmission : <label style={style.secondLbl}>{cars.transmission}</label></label><br/>
                                    <label>Type : <label style={style.secondLbl}>{cars.type}</label></label><br/>


                                </Form>

                                <Divider type={'horizontal'} dashed style={style.divider}>Booking Information</Divider>
                                <Form layout={"horizontal"} style={style.loginForm}>

                                    <label>userId : <label style={style.secondLbl}>{id}</label></label><br/>
                                    <label>paymentId : <label style={style.secondLbl}>res</label></label><br/>
                                    <label>type : <label style={style.secondLbl}>Booking</label></label><br/>
                                    <label>vehicle register number : <label
                                        style={style.secondLbl}>{cars.registrationNo}</label></label><br/>

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