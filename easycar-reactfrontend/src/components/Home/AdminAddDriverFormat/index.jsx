import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, Row} from 'antd';
import PostService from "../../../services/PostService";


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
            alert: false,
            message: '',
            severity: ''
        }
    }


    render() {
        const {classes} = this.props;

        const onFinish = async values => {

            let id = this.state.formData.id
            let address = this.state.formData.address
            let age = this.state.formData.age
            let contact = this.state.formData.contact
            let experience = this.state.formData.experience
            let name = this.state.formData.name
            let nic = "nic"
            let salary = this.state.formData.salary
            let vehicleRegisterNo = this.state.formData.vehicleRegisterNo


            console.log('save button clicked!!')
            /*console.log(values)*/

            let response = await PostService.createPostDriver(this.state.formData);
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



        const handleUploadClick = async event => {}

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

                            <Form.Item name={"id"} label={"Id"} rules={[{required: true}]}>
                                <Input value={this.state.formData.id}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.id = e.target.value
                                           this.setState({formData})
                                       }}/>
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
                                <Input value={this.state.formData.age}
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
                                <Input value={this.state.formData.experience}
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
                                       onChange={handleUploadClick}  />
                            </Form.Item>

                            <Form.Item name={"salary"} label={"Salary"} rules={[{required: true}]}>
                                <Input value={this.state.formData.salary}
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