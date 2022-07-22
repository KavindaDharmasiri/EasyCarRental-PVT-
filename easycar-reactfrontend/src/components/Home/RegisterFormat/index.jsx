import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import car_img from "../../../assets/img/car.jpg";
import {Col, Form, Input, Row , message} from 'antd'
import {Link} from "react-router-dom";
import PostService from "../../../services/PostService";
import GetService from "../../../services/GetService";
import axios from "axios";

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
                nic: 'sad',
                password: '',
                type: ''
            },
            alert: false,
            message: '',
            severity: '',
            data:[],
            newId:'',
            file:null
        }
    }

    async getAllUsers() {
        let res = await GetService.getAllUser();

        console.log('get')
                console.log(res.data.data[res.data.data.length-1])
                this.setState({
                    data: res.data.data[res.data.data.length-1]
                })

        if (res.status === 200) {

            this.setId(res.data.data[res.data.data.length-1])

        } else {
            console.log("fetching error: " + res)

            this.setId(res.data.data[res.data.data.length-1])

        }
    }

    setId(tr){
        let tempone = this.state.data.id
        console.log('temp int')
        let teId = 'U001';

        this.setState({
            newId:teId
        })

        let temp = parseInt(tempone.slice(1))

        console.log(temp)



        if(temp<1){
            teId = 'U001'
        }else if (temp<9){
            teId = 'U00'+(temp+1)
        }else if (temp<99){
            teId = 'U0'+(temp+1)
        }else if (temp<999){
            teId = 'U'+(temp+1)
        }else{
            teId = 'U001'
        }

        this.setState({
            newId:teId
        })
        console.log('teId')
        console.log(teId)

    }

    componentDidMount() {
         this.getAllUsers()
    }

    handleFile(e){

        let file = e.target.files[0];
        console.log(file);
        this.setState({
            file:file
        })


    }


    render() {
        const {classes} = this.props;


        console.log('state')
        console.log(this.state.newId)


        const saveUser = async values =>  {

            console.log('user save')
            let response = await PostService.createPostUser(this.state.formData);
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

        const onFinish = async values => {

            this.state.formData.id=this.state.newId

            console.log('save button clicked!!')

            const formData = new FormData();

            formData.append(
                "myFile",
                this.state.file,
                this.state.file.name
            );

            let res= await PostService.createPostUserImage(formData);

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

        };



        return (
            <div style={style.login}>
                <Row className={'d-flex align-items-center'}>

                    <Col lg={16} style={style.carImage}>




                        {/*<img src={require("F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/uploads/aa.png")} alt=""/>*/}
                        <img src={car_img} alt=""/>
                        <h1 style={style.loginLogo}>Easy Car Rental(PVT)</h1>

                    </Col>

                    <Col lg={8}>
                        <Form layout={"vertical"} style={style.loginForm} onFinish={onFinish}>
                            <h1 style={style.colourLable}>Register</h1>

                            <hr/>

                            <Form.Item name={"id"} label={"Id"} >

                                <h3>{this.state.newId}</h3>

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
                                <Input type={"number"} value={this.state.formData.age}
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
                                       onChange={(e) => {
                                           this.handleFile(e)
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
                                <Input type={"password"} value={this.state.formData.password}
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