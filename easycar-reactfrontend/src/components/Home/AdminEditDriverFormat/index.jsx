import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, Row } from 'antd';

function onFinish(values) {
    console.log(values)
}

class DefaultDriverEdit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
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

                          <Form.Item name={"id"} label={"Id"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"address"} label={"Address"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"age"} label={"Age"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"contact"} label={"Contact"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"exp"} label={"Experience"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"name"} label={"Name"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"nic"} label={"Nic"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"salary"} label={"Salary"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"vehicelNo"} label={"Own Vehicle Register No"} rules={[{required:true}]}>
                                <Input/>
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