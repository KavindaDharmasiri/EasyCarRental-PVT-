import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, message, Row} from 'antd';
import PostService from "../../../services/PostService";
import EditService from "../../../services/EditService";
import GetService from "../../../services/GetService";

let regNo;


class DefaultDriverEdit extends Component {
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
                nic: '',
                salary: '',
                vehicleRegisterNo: ''
            },
            data:[],
            alert: false,
            message: '',
            severity: ''
        }
    }


    componentDidMount() {
        let link = window.location.href

        regNo = String(link.slice(36));

        console.log(regNo)
        this.initializee(regNo)

    }

    async initializee(regNo) {
        let res = await GetService.fetchAllDrivers();

        for (let i=0 ;i<res.data.data.length;i++){
            if (res.data.data[i].id=== regNo){

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

        const onFinish = async values => {

            this.state.formData.id = regNo
            console.log('edit button clicked!!')
            /*console.log(values)*/

            let response = await EditService.createEditDriver(this.state.formData);
            if (response.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(()=>{
                    message.success('Driver Update Success!!')
                },2000);
            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(()=>{
                    message.error('Driver Update Unsuccessful!!')
                },2000);
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
                            <h3>Edit Driver</h3>

                            <label>Id</label>
                            <h3 >{regNo}</h3>

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
                                       className={classes.input}
                                       id="upload-profile-image"
                                       type="file"
                                       value={this.state.formData.nic}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.nic = e.target.value
                                           this.setState({ formData })
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

                            <button style={style.btn1}>Edit Driver</button>
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

export default withStyles(style)(DefaultDriverEdit)