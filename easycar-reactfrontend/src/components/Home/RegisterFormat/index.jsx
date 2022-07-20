import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import car_img from "../../../assets/img/car.jpg";
import {Col, Form, Input, Row , message} from 'antd'
import {Link} from "react-router-dom";
import PostService from "../../../services/PostService";
import ImageAction, {uploadImage} from "../../../services/ImageAction";



class DefaultRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                id: '',
                name: '',
                address: '',
                age: '',
                contact: '',
                nic: null,
                password: '',
                type: ''
            },
            alert: false,
            message: '',
            severity: '',
            image_file: null
        }
    }


    render() {
        const {classes} = this.props;

        const onFinish = async values => {

            console.log('save button clicked!!')

             let response = await PostService.createPostUser(this.state.formData);
            if (response.status === 201) {

                this.setState({
                    alert: true,
                    message: 'Post created succesfully!',
                    severity: 'success'
                })

                setTimeout(()=>{
                    message.success('Register Success!!')
                },2000);

            } else {
                this.setState({
                    alert: true,
                    message: 'Post created Unsuccesfully!',
                    severity: 'error'
                })

                setTimeout(()=>{
                    message.error('Register Failed!!')
                },2000);
            }
        };

        let image_as_files


        const handleUploadClick = async event => {
            var data = new FormData();
            let file = event.target.files[0];
            console.log('file')
            console.log(file)
            let fileName = event.target.files[0].name;
            data.append("myFile", file, fileName);

            console.log('file'+file)
            console.log('file name '+ fileName)

            let response = await ImageAction.uploadImage(data);
            console.log(response)

        };


        return (
            <div style={style.login}>
                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.carImage}>
                        <img src={car_img} alt=""/>
                        <h1 style={style.loginLogo}>Easy Car Rental(PVT)</h1>

                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm} onFinish={onFinish}>
                            <h1 style={style.colourLable}>Register</h1>
                            <hr/>

                            <Form.Item name={"id"} label={"Id"} rules={[{required: true}]}>
                                <Input value={this.state.formData.id}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.id = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"name"} label={"UserName"} rules={[{required: true}]}>
                                <Input value={this.state.formData.name}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.name = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"address"} label={"Address"} rules={[{required: true}]}>
                                <Input value={this.state.formData.address}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.address = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"age"} label={"Age"} rules={[{required: true}]}>
                                <Input value={this.state.formData.age}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.age = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>

                            <Form.Item name={"nic"} label={"Nic/license Picture"} rules={[{required: true}]}>
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

                            <Form.Item name={"type"} label={"Admin/User"} rules={[{required: true}]}>
                                <Input value={this.state.formData.type}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.type = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>


                            <Form.Item name={"contact"} label={"Contatc"} rules={[{required: true}]}>
                                <Input value={this.state.formData.contact}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.contact = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>


                            <Form.Item name={"password"} label={"Password"} rules={[{required: true}]}>
                                <Input value={this.state.formData.password}
                                       onChange={(e) => {
                                           let formData = this.state.formData
                                           formData.password = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            </Form.Item>


                            {/*<Form.Item name={"cPWord"} label={"Cpnfirm Password"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>*/}

                            <button style={style.btn1}>Register</button>

                            <br/>

                            <Link style={style.aTag} to={'/login'}>Click Here to Login</Link>
                        </Form>
                    </Col>
                </Row>

            </div>

        )
    }

}

export default withStyles(style)(DefaultRegister)