import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import GetService from "../../../services/GetService";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import DeleteService from "../../../services/DeleteService";
import {message} from "antd";

class DefaultCarManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    async loadData() {
        let res = await GetService.fetchAllCar();

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

    deleteCar(value) {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete ' + value + ' car',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        let res = await DeleteService.deleteCarCar(value);

                        if (res.status === 200) {
                            setTimeout(() => {
                                message.error('Car Deleted!!')
                            }, 2000);

                            const newWindow = window.open('http://localhost:3000/carManage', '_self', 'noopener,noreferrer')
                            if (newWindow) newWindow.opener = null

                        } else {
                            console.log("fetching error: " + res)
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('you Click No')
                }
            ]
        });
    }

    render() {
        const {classes} = this.props;

        const cars = this.state.data

        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">

                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>

                            <button style={style.btn1}><Link to={'/carAdd'}>Add New Car</Link></button>

                        </div>
                    </div>
                </div>

                <div style={style.appcontainer}>
                    <table style={style.table}>
                        <thead>
                        <tr>
                            <th style={style.th}>registrationNo</th>
                            <th style={style.th}>brand</th>
                            <th style={style.th}>type</th>
                            <th style={style.th}>transmission</th>
                            <th style={style.th}>colour</th>
                            <th style={style.th}>noOfPassenger</th>
                            <th style={style.th}>fuel</th>
                            <th style={style.th}>image1</th>
                            <th style={style.th}>image2</th>
                            <th style={style.th}>image3</th>
                            <th style={style.th}>image4</th>
                            <th style={style.th}>priceForRent</th>
                            <th style={style.th}>Action</th>
                        </tr>

                        </thead>
                        <tbody>
                        {cars.map((car) =>
                            <tr>
                                <td style={style.td}>{car.registrationNo}</td>
                                <td style={style.td}>{car.brand}</td>
                                <td style={style.td}>{car.type}</td>
                                <td style={style.td}>{car.transmission}</td>
                                <td style={style.td}>{car.colour}</td>
                                <td style={style.td}>{car.noOfPassenger}</td>
                                <td style={style.td}>{car.fuel}</td>
                                <td style={style.td}><img style={style.imgTable}
                                                          src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + car.image1)}
                                                          alt=""/></td>
                                <td style={style.td}><img style={style.imgTable}
                                                          src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + car.image2)}
                                                          alt=""/></td>
                                <td style={style.td}><img style={style.imgTable}
                                                          src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + car.image3)}
                                                          alt=""/></td>
                                <td style={style.td}><img style={style.imgTable}
                                                          src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + car.image4)}
                                                          alt=""/></td>
                                <td style={style.td}>{car.priceForRent}</td>
                                <td style={style.td}><Link to={'/carEdit?id=' + car.registrationNo}><EditOutlined
                                    style={{color: 'green', cursor: "pointer"}} className={'mr-3'}/></Link>
                                    <button type={'button'} style={style.btnTra} onClick={() => {
                                        this.deleteCar(car.registrationNo)
                                    }}><DeleteOutlined style={{color: 'red', cursor: "pointer"}} className={'mr-3'}/>
                                    </button>
                                </td>
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

export default withStyles(style)(DefaultCarManage)