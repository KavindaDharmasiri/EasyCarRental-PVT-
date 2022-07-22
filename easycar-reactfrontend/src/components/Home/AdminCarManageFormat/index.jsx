import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import GetService from "../../../services/GetService";
import {GridColDef} from "@mui/x-data-grid";
import {EditOutlined , DeleteOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


class DefaultCarManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

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

    async componentDidMount() {

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

                            <button style={style.btn1}><Link to={'/carAdd'}>Add New Car</Link></button>

                        </div>
                    </div>
                </div>

                <div style={style.appcontainer}>
                    <table  style={style.table}>
                        <thead>
                        <tr>
                            <th  style={style.th}>registrationNo</th>
                            <th style={style.th}>brand</th>
                            <th style={style.th}>type</th>
                            <th  style={style.th}>transmission</th>
                            <th  style={style.th}>colour</th>
                            <th  style={style.th}>noOfPassenger</th>
                            <th  style={style.th}>fuel</th>
                            <th  style={style.th}>image1</th>
                            <th  style={style.th}>image2</th>
                            <th  style={style.th}>image3</th>
                            <th  style={style.th}>image4</th>
                            <th  style={style.th}>priceForRent</th>
                            <th  style={style.th}>Action</th>
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
                                <td style={style.td}><img style={style.imgTable} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+car.image1)} alt=""/></td>
                                <td style={style.td}><img style={style.imgTable} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+car.image2)} alt=""/></td>
                                <td style={style.td}><img style={style.imgTable} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+car.image3)} alt=""/></td>
                                <td style={style.td}><img style={style.imgTable} src={require('F:/apache-tomcat-8.5.76-windows-x64/apache-tomcat-8.5.76/webapps/easycarRental_war/'+car.image4)} alt=""/></td>
                                {/*<td style={style.td}>{car.image1}</td>
                                <td style={style.td}>{car.image2}</td>
                                <td style={style.td}>{car.image3}</td>
                                <td style={style.td}>{car.image4}</td>*/}
                                <td style={style.td}>{car.priceForRent}</td>
                                <td style={style.td}><Link to={'/carEdit?id='+car.registrationNo} ><EditOutlined style={{color:'green' , cursor:"pointer"}} className={'mr-3'}/></Link><Link to={'/deleteCar?id='+car.registrationNo} ><DeleteOutlined style={{color:'red' , cursor:"pointer"}} className={'mr-3'}/></Link></td>
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