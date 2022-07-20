import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import book_logo from "../../../assets/img/book.jpg";
import {Link} from "react-router-dom";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import GetService from "../../../services/GetService";

class DefaultDriverManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    async loadData() {
        let res = await GetService.fetchAllDrivers();
        console.log("row response: " + JSON.stringify(res.data.data[0].name))

        this.setState({
            data: res.data.data
        })


        if (res.status === 200) {


        } else {
            console.log("fetching error: " + res)
        }
    }

    async componentDidMount() {

        this.loadData()


    }


    render() {
        const {classes} = this.props;

        const drivers = this.state.data


        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">

                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>

                            <button style={style.btn1}><Link to={'/driverAdd'}>Add New Driver</Link></button>
                        </div>
                    </div>
                </div>


                <div style={style.appcontainer}>
                    <table  style={style.table}>
                        <thead>
                        <tr>
                            <th  style={style.th}>Edit</th>
                            <th  style={style.th}>id</th>
                            <th  style={style.th}>address</th>
                            <th style={style.th}>age</th>
                            <th style={style.th}>contact</th>
                            <th  style={style.th}>experience</th>
                            <th  style={style.th}>name</th>
                            <th  style={style.th}>nic</th>
                            <th  style={style.th}>salary</th>
                            <th  style={style.th}>vehicleRegisterNo</th>
                            <th  style={style.th}>Delete</th>
                        </tr>

                        </thead>
                        <tbody>
                        {drivers.map((driver) =>
                            <tr>
                                <td style={style.td}><Link to={'/driverEdit?id='+driver.id} ><EditOutlined style={{color:'green' , cursor:"pointer"}} className={'mr-3'}/></Link></td>
                                <td style={style.td}>{driver.id}</td>
                                <td style={style.td}>{driver.address}</td>
                                <td style={style.td}>{driver.age}</td>
                                <td style={style.td}>{driver.contact}</td>
                                <td style={style.td}>{driver.experience}</td>
                                <td style={style.td}>{driver.name}</td>
                                <td style={style.td}>{driver.nic}</td>
                                <td style={style.td}>{driver.salary}</td>
                                <td style={style.td}>{driver.vehicleRegisterNo}</td>
                                <td style={style.td}><Link  to={'/driverManage?id='+driver.id}><DeleteOutlined style={{color:'red' , cursor:"pointer"}} className={'mr-3'}/></Link></td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>

                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>

        )
    }

}

export default withStyles(style)(DefaultDriverManage)