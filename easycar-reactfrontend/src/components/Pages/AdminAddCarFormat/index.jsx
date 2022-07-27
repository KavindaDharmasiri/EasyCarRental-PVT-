import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, message, Row} from 'antd';
import PostService from "../../../services/PostService";
import GetService from "../../../services/GetService";

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
            severity: '',
            data: [],
            newId: '',
            fileOne: null,
            fileTwo: null,
            fileThree: null,
            fileFour: null
        }
    }

    async getAllCars() {
        let res = await GetService.fetchAllCar();

        this.setState({
            data: res.data.data[res.data.data.length - 1]
        })

        if (res.status === 200) {
            this.setId(res.data.data[res.data.data.length - 1])

        } else {
            console.log("fetching error: " + res)

            this.setId(res.data.data[res.data.data.length - 1])
        }
    }

    setId(tr) {
        let tempone = this.state.data.registrationNo
        let teId = 'C001';

        this.setState({
            newId: teId
        })

        let temp = parseInt(tempone.slice(1))

        if (temp < 1) {
            teId = 'C001'
        } else if (temp < 9) {
            teId = 'C00' + (temp + 1)
        } else if (temp < 99) {
            teId = 'C0' + (temp + 1)
        } else if (temp < 999) {
            teId = 'C' + (temp + 1)
        } else {
            teId = 'C001'
        }

        this.setState({
            newId: teId
        })
    }

    componentDidMount() {
        this.getAllCars()
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
            let response = await PostService.createPostCar(this.state.formData);
            if (response.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(() => {
                    message.success('Car Adding Success!!')
                }, 2000);

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(() => {
                    message.error('Car Adding Unsuccessful!!')
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

            this.state.formData.registrationNo = this.state.newId

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

                            <Form.Item name={"registerNo"} label={"Registration No"}>
                                <h3>{this.state.newId}</h3>
                            </Form.Item>

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

export default withStyles(style)(DefaultCarAdd)