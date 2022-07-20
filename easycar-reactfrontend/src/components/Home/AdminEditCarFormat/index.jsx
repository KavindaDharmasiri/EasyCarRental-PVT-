import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, Row } from 'antd';
import EditService from "../../../services/EditService";
import GetService from "../../../services/GetService";

let regNo;

class DefaultCarEdit extends Component {

    constructor(props) {
        super(props);


        this.state = {
            formData: {
                registrationNo: '',
                brand: '',
                colour: '',
                fuel: '',
                noOfPassenger: '',
                priceForRent: '',
                transmission: '',
                type: '',
                image1: 'aa',
                image2: 'vv',
                image3: 'dd',
                image4: 'gg'
            },
            data:[],
            alert: false,
            message: '',
            severity: ''
        }
    }

    componentDidMount() {
        let link = window.location.href

        regNo = String(link.slice(33));

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



        const onFinish = async values =>  {


            this.state.formData.registrationNo = regNo

            let response = await EditService.createEditCar(this.state.formData);
            if (response.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })
            }
        }



        const cars = this.state.data
        console.log(cars)


        console.log("let "+ regNo)


        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">

                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>


                        </div>
                    </div>
                </div>


                <Row justify={"center"}>
                    <Col lg={12} sm={24}>
                        <Form style={style.bs1} layout={"vertical"} onFinish={onFinish}>
                            <h3>Edit Car</h3>


                            <label>registerNo</label>
                            <h3 >{regNo}</h3>
                            {/*<Form.Item name={"registerNo"} label={"Registration No"} rules={[{required:true}]}>
                                <Input value={this.state.formData.registrationNo} defaultValue={String(regNo)}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.registrationNo = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>*/}

                            <Form.Item name={"brand"} label={"Brand"} rules={[{required:true}]}>
                                <Input value={this.state.formData.brand}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.brand = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"color"} label={"Color"} rules={[{required:true}]}>
                                <Input value={this.state.formData.colour}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.colour = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"fuel"} label={"Fuel"} rules={[{required:true}]}>
                                <Input value={this.state.formData.fuel}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.fuel = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"fImg"} label={"Front image"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       /*value={this.state.formData.image1}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.image1 = e.target.value
                                           this.setState({ formData })
                                       }}*//>
                            </Form.Item>

                            <Form.Item name={"bImg"} label={"Back image"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       /*value={this.state.formData.image2}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.image2 = e.target.value
                                           this.setState({ formData })
                                       }}*//>
                            </Form.Item>

                            <Form.Item name={"sImg1"} label={"Side image 1"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       /*value={this.state.formData.image3}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.image3 = e.target.value
                                           this.setState({ formData })
                                       }}*//>
                            </Form.Item>

                            <Form.Item name={"sImg2"} label={"Side image 2"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       /*value={this.state.formData.image4}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.image4 = e.target.value
                                           this.setState({ formData })
                                       }}*//>
                            </Form.Item>

                            <Form.Item name={"noOfPassenger"} label={"No of Passenger"} rules={[{required:true}]}>
                                <Input value={this.state.formData.noOfPassenger}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.noOfPassenger = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"priceForHour"} label={"Price for hour"} rules={[{required:true}]}>
                                <Input value={this.state.formData.priceForRent}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.priceForRent = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"transmition"} label={"Transmition"} rules={[{required:true}]}>
                                <Input value={this.state.formData.transmission}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.transmission = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"type"} label={"Type"} rules={[{required:true}]}>
                                <Input value={this.state.formData.type}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.type = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>


                            <button style={style.btn1}>Edit Car</button>
                        </Form>
                    </Col>
                </Row>

                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>

        )
    }

}

export default withStyles(style)(DefaultCarEdit)