import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import book_logo from "../../../assets/img/book.jpg";
import resp_logo from "../../../assets/img/rent.jpg";
import restReservation_logo from "../../../assets/img/rent&reservation.jpeg";
import {Link} from "react-router-dom";
import {BookTwoTone} from "@ant-design/icons";
import GetService from "../../../services/GetService";

let regNo;

class DefaultBooking extends Component {
    constructor(props) {
        super(props);


        this.state = {
            data: [],
                id: ''
            }
        }

        componentDidMount() {
            let link = window.location.href

            regNo = String(link.slice(36));

            this.setState({
                id: regNo
            })
            console.log('regno')
            console.log(regNo)

            this.loadData()
        }



    async loadData() {
        let res = await GetService.fetchAllCar();
        console.log("row response: " + JSON.stringify(res.data.data[0].brand))

        this.setState({
            data: res.data.data
        })


        if (res.status === 200) {


        } else {
            console.log("fetching error: " + res)
        }
    }


    render() {
        const {classes} = this.props;

        const cars = this.state.data

        let re = this.state.id
        console.log('idre')
        console.log(re)

        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">

                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>
<h3>{re}</h3>

                        </div>
                    </div>
                </div>


                <div>
                    <div style={style.appcontainer}>
                        <table  style={style.table}>
                            <thead>
                            <tr>
                                <th  style={style.th}>photo</th>
                                <th style={style.th}>brand</th>
                                <th style={style.th}>type</th>
                                <th  style={style.th}>Book Now</th>
                            </tr>

                            </thead>
                            <tbody>
                            {cars.map((car) =>
                                <tr>
                                    <td style={style.td}><img style={style.imgTable} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+car.image1)} alt=""/></td>
                                    <td style={style.td}>{car.brand}</td>
                                    <td style={style.td}>{car.type}</td>
                                    <td style={style.td}><Link  to={'/bookingCarDet?id='+car.registrationNo+'&idtwo='+re}><BookTwoTone style={{color:'red' , cursor:"pointer"}} className={'mr-3'}/></Link></td>
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

export default withStyles(style)(DefaultBooking)