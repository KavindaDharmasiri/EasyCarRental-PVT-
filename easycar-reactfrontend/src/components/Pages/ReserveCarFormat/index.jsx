import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Link} from "react-router-dom";
import {RightCircleOutlined} from "@ant-design/icons";
import GetService from "../../../services/GetService";

let regNo;

class DefaultReserve extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataDri: [],
            id: ''
        }
    }

    async getCars() {
        let res = await GetService.fetchAllCar();

        let temp = [];

        for (let i = 0; i < res.data.data.length; i++) {
            for (let y = 0; y < this.state.dataDri.length; y++) {
                if (res.data.data[i].vehicleRegistrationNo === this.state.dataDri[y].vehicleRegistrationNo) {
                    temp.push(res.data.data[i])
                    break
                }
            }
        }

        this.setState({
            data: temp
        })

        temp = []

        if (res.status === 200) {

        } else {
            console.log("fetching error: " + res)
        }
    }

    async loadData() {
        let res = await GetService.fetchAllDrivers();

        this.setState({
            dataDri: res.data.data
        })

        if (res.status === 200) {
            this.getCars()

        } else {
            console.log("fetching error: " + res)
            this.getCars()
        }
    }

    async componentDidMount() {
        let link = window.location.href
        regNo = String(link.slice(37));
        this.setState({
            id: regNo
        })
        this.loadData()
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

                            <h3>{this.state.id}</h3>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={style.appcontainer}>
                        <table style={style.table}>
                            <thead>
                            <tr>
                                <th style={style.th}>photo</th>
                                <th style={style.th}>brand</th>
                                <th style={style.th}>type</th>
                                <th style={style.th}>Rent Now</th>
                            </tr>

                            </thead>
                            <tbody>
                            {cars.map((car) =>
                                <tr>
                                    <td style={style.td}><img style={style.imgTable}
                                                              src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/' + car.image1)}
                                                              alt=""/></td>
                                    <td style={style.td}>{car.brand}</td>
                                    <td style={style.td}>{car.type}</td>
                                    <td style={style.td}><Link
                                        to={'/resCarDet?id=' + car.registrationNo + '&idtwo=' + this.state.id}><RightCircleOutlined
                                        style={{color: 'green', cursor: "pointer" , fontSize:"30px"}} className={'mr-3'}/></Link></td>
                                </tr>
                            )}

                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>
        )
    }
}

export default withStyles(style)(DefaultReserve)