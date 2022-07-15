import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Form, Input, Row } from 'antd';

function onFinish(values) {
    console.log(values)
}

class DefaultCarAdd extends Component {
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
                            <h3>Add New Car</h3>

                          <Form.Item name={"registerNo"} label={"Registration No"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"brand"} label={"Brand"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"color"} label={"Color"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"fuel"} label={"Fuel"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"img"} label={"Img"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"noOfPassenger"} label={"No of Passenger"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"priceForHour"} label={"Price for hour"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"transmition"} label={"Transmition"} rules={[{required:true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name={"type"} label={"Type"} rules={[{required:true}]}>
                                <Input/>
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