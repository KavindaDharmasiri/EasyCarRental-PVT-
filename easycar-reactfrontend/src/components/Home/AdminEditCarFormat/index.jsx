import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, message, Row} from 'antd';
import EditService from "../../../services/EditService";
import GetService from "../../../services/GetService";
import PostService from "../../../services/PostService";

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
            data: [],
            alert: false,
            message: '',
            severity: '',
            fileOne: null,
            fileTwo: null,
            fileThree: null,
            fileFour: null
        }
    }

    componentDidMount() {
        let link = window.location.href
        regNo = String(link.slice(33));
        this.initializee(regNo)
    }

    async initializee(regNo) {
        let res = await GetService.fetchAllCar();

        for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].registrationNo === regNo) {

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

    handleFileOne(e) {
        let file = e.target.files[0];
        this.setState({
            fileOne: file
        })
    }

    handleFileTwo(e) {
        let file = e.target.files[0];
        this.setState({
            fileTwo: file
        })
    }

    handleFileThree(e) {
        let file = e.target.files[0];
        this.setState({
            fileThree: file
        })
    }

    handleFileFour(e) {
        let file = e.target.files[0];
        this.setState({
            fileFour: file
        })
    }

    render() {

        const {classes} = this.props;

        const saveCar = async values => {
            let response = await EditService.createEditCar(this.state.formData);
            if (response.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(() => {
                    message.success('Car Update Success!!')
                }, 2000);
            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(() => {
                    message.error('Car Update Unsuccessful!!')
                }, 2000);
            }
        }

        const saveFourImg = async values => {
            const formDataThree = new FormData();

            formDataThree.append(
                "myFile",
                this.state.fileFour,
                this.state.fileFour.name
            );

            let res = await PostService.createPostCarImageFour(formDataThree);

            if (res.status === 201) {
                saveCar()

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })
                saveCar()
            }
        }


        const saveThreeImg = async values => {
            const formDataTwo = new FormData();

            formDataTwo.append(
                "myFile",
                this.state.fileThree,
                this.state.fileThree.name
            );

            let res = await PostService.createPostCarImageThree(formDataTwo);

            if (res.status === 201) {
                saveFourImg()
            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                saveFourImg()
            }
        }


        const saveTwoImg = async values => {

            const formDataOne = new FormData();

            formDataOne.append(
                "myFile",
                this.state.fileTwo,
                this.state.fileTwo.name
            );

            let res = await PostService.createPostCarImageTwo(formDataOne);

            if (res.status === 201) {
                saveThreeImg()

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                saveThreeImg()
            }
        }

        const onFinish = async values => {
            this.state.formData.registrationNo = regNo

            const formData = new FormData();

            formData.append(
                "myFile",
                this.state.fileOne,
                this.state.fileOne.name
            );

            let res = await PostService.createPostCarImageOne(formData);

            if (res.status === 201) {
                saveTwoImg()

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                saveTwoImg()
            }
        }

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
                            <h3>{regNo}</h3>

                            <Form.Item name={"brand"} label={"Brand"} rules={[{required: true}]}>
                                <Input value={this.state.formData.brand}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.brand = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"color"} label={"Color"} rules={[{required: true}]}>
                                <Input value={this.state.formData.colour}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.colour = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"fuel"} label={"Fuel"} rules={[{required: true}]}>
                                <Input value={this.state.formData.fuel}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.fuel = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"fImg"} label={"Front image"} rules={[{required: true}]}>
                                <Input accept="image/*"
                                       id="upload-profile-image"
                                       type="file"
                                       onChange={(e) => {
                                           this.handleFileOne(e)
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"bImg"} label={"Back image"} rules={[{required: true}]}>
                                <Input accept="image/*"
                                       id="upload-profile-image"
                                       type="file"
                                       onChange={(e) => {
                                           this.handleFileTwo(e)
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"sImg1"} label={"Side image 1"} rules={[{required: true}]}>
                                <Input accept="image/*"
                                       id="upload-profile-image"
                                       type="file"
                                       onChange={(e) => {
                                           this.handleFileThree(e)
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"sImg2"} label={"Side image 2"} rules={[{required: true}]}>
                                <Input accept="image/*"
                                       id="upload-profile-image"
                                       type="file"
                                       onChange={(e) => {
                                           this.handleFileFour(e)
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"noOfPassenger"} label={"No of Passenger"} rules={[{required: true}]}>
                                <Input type={"number"} value={this.state.formData.noOfPassenger}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.noOfPassenger = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"priceForHour"} label={"Price for hour"} rules={[{required: true}]}>
                                <Input type={"number"} value={this.state.formData.priceForRent}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.priceForRent = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"transmition"} label={"Transmition"} rules={[{required: true}]}>
                                <Input value={this.state.formData.transmission}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.transmission = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"type"} label={"Type"} rules={[{required: true}]}>
                                <Input value={this.state.formData.type}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.type = e.target.value
                                           this.setState({formData})
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

export default withStyles(style)(DefaultCarEdit)