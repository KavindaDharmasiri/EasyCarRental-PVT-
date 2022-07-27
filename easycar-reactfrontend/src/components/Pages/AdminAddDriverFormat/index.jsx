import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, message, Row} from 'antd';
import PostService from "../../../services/PostService";
import GetService from "../../../services/GetService";

class DefaultDriverAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                id: '',
                address: '',
                age: '',
                contact: '',
                experience: '',
                name: '',
                nic: "nic",
                salary: '',
                vehicleRegisterNo: ''
            },
            formData2: {
                password: ''
            },
            formData3: {
                id: '',
                name: '',
                address: '',
                age: '',
                contact: '',
                nic: 'sad',
                password: '',
                type: ''
            },
            alert: false,
            message: '',
            severity: '',
            data: [],
            newId: '',
            file: null
        }
    }


    async getAllDrivers() {
        let res = await GetService.fetchAllDrivers();

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
        let tempone = this.state.data.id
        let teId = 'D001';

        this.setState({
            newId: teId
        })

        let temp = parseInt(tempone.slice(1))

        if (temp < 1) {
            teId = 'D001'
        } else if (temp < 9) {
            teId = 'D00' + (temp + 1)
        } else if (temp < 99) {
            teId = 'D0' + (temp + 1)
        } else if (temp < 999) {
            teId = 'D' + (temp + 1)
        } else {
            teId = 'D001'
        }

        this.setState({
            newId: teId
        })
    }

    componentDidMount() {
        this.getAllDrivers()
    }

    handleFile(e) {
        let file = e.target.files[0];
        this.setState({
            file: file
        })
    }

    render() {
        const {classes} = this.props;


        const saveImage = async values => {

            console.log('saveImg')
            this.setState({
                formData3: {
                    id: this.state.formData.id,
                    name: this.state.formData.name,
                    address: this.state.formData.address,
                    age: this.state.formData.age,
                    contact: this.state.formData.contact,
                    nic: this.state.formData.nic,
                    password: this.state.formData2.password,
                    type: 'Driver'
                }
            })

            const formData = new FormData();
            formData.append(
                "myFile",
                this.state.file,
                this.state.file.name
            );

            let res = await PostService.createPostUserImage(formData);

            if (res.status === 201) {
                saveLoginUser()

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                saveLoginUser()
            }
        }

        const saveLoginUser = async values => {

            console.log(this.state.formData3)
            let response = await PostService.createPostUser(this.state.formData3);
            if (response.status === 201) {

                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(() => {
                    message.success('Register Success!!')
                }, 2000);

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(() => {
                    message.error('Register Failed!!')
                }, 2000);
            }
        }

        const saveUser = async values => {

            let response = await PostService.createPostDriver(this.state.formData);
            if (response.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(() => {
                    message.success('Adding Driver Success!!')
                }, 2000);

                saveImage();

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(() => {
                    message.error('Adding Car Unsuccessful!!')
                }, 2000);

                saveImage();
            }
        }

        const onFinish = async values => {
            this.state.formData.id = this.state.newId

            console.log(this.state.formData)

            const formData = new FormData();

            formData.append(
                "myFile",
                this.state.file,
                this.state.file.name
            );

            let res = await PostService.createPostDriverImage(formData);

            if (res.status === 201) {
                saveUser()

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                saveUser()
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
                            <h3>Add New Driver</h3>

                            <Form.Item name={"id"} label={"Id"}>
                                <h3>{this.state.newId}</h3>
                            </Form.Item>

                            <Form.Item name={"address"} label={"Address"} rules={[{required: true}]}>
                                <Input value={this.state.formData.address}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.address = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"age"} label={"Age"} rules={[{required: true}]}>
                                <Input type={"number"} value={this.state.formData.age}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.age = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"contact"} label={"Contact"} rules={[{required: true}]}>
                                <Input value={this.state.formData.contact}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.contact = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"exp"} label={"Experience"} rules={[{required: true}]}>
                                <Input type={"number"} value={this.state.formData.experience}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.experience = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"name"} label={"Name"} rules={[{required: true}]}>
                                <Input value={this.state.formData.name}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.name = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"nic"} label={"Nic"} rules={[{required: true}]}>
                                <Input accept="image/*"
                                       id="upload-profile-image"
                                       type="file"
                                       onChange={(e) => {
                                           this.handleFile(e)
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"salary"} label={"Salary"} rules={[{required: true}]}>
                                <Input type={"number"} value={this.state.formData.salary}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.salary = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"vehicelNo"} label={"Own Vehicle Register No"} rules={[{required: true}]}>
                                <Input value={this.state.formData.vehicleRegisterNo}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.vehicleRegisterNo = e.target.value
                                           this.setState({formData})
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"password"} label={"Password"} rules={[{required: true}]}>
                                <Input value={this.state.formData2.password} type={"password"}
                                       onChange={(e) => {
                                           let formData2 = this.state.formData2
                                           formData2.password = e.target.value
                                           this.setState({formData2})
                                       }}/>
                            </Form.Item>

                            <button style={style.btn1}>Add Driver</button>
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

export default withStyles(style)(DefaultDriverAdd)