import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, Row } from 'antd';
import PostService from "../../../services/PostService";

class DefaultCarAdd extends Component {
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
                image1: 'image1',
                image2: 'image1',
                image3: 'image1',
                image4: 'image1'
            },
            alert: false,
            message: '',
            severity: ''
        }
    }

    render() {
        const {classes} = this.props;

        const onFinish = async values =>  {

            let registrationNo = this.state.formData.registrationNo
            let brand = this.state.formData.brand
            let colour = this.state.formData.colour
            let fuel = this.state.formData.fuel
            let noOfPassenger = this.state.formData.noOfPassenger
            let priceForRent = this.state.formData.priceForRent
            let transmission = this.state.formData.transmission
            let type = this.state.formData.type
            let image1 = "image1"
            let image2 = "image2"
            let image3 = "image3"
            let image4 = "image4"

            console.log('save button clicked!!')
            /*console.log(values)*/

            let response = await PostService.createPostCar(this.state.formData);
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
        };


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
                            <h3>Add New Car</h3>

                          <Form.Item name={"registerNo"} label={"Registration No"} rules={[{required:true}]}>
                                <Input value={this.state.formData.registrationNo}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.registrationNo = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

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
                                       />
                            </Form.Item>

                            <Form.Item name={"bImg"} label={"Back image"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       />
                            </Form.Item>

                            <Form.Item name={"sImg1"} label={"Side image 1"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       />
                            </Form.Item>

                            <Form.Item name={"sImg2"} label={"Side image 2"} rules={[{required: true}]}>
                                <Input id={'file'} name={'myFile'} type={'file'} className={'form-control'}
                                       />
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

                            <button style={style.btn1}>Add Car</button>
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

export default withStyles(style)(DefaultCarAdd)