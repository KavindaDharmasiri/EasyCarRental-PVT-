import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import day_logo from "../../../assets/img/day.png";
import month_logo from "../../../assets/img/month.png";
import year_logo from "../../../assets/img/year.jpg";
import restReservation_logo from "../../../assets/img/rent&reservation.jpeg";
import {Link} from "react-router-dom";

class CheckFinalReport extends Component {
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


                <div>
                    <Row justify={"center"} >
                        <Col style={style.col}>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={day_logo} style={style.dashboardImg} alt=""/>

                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Day Earning</p>
                                                <p style={style.paragraph}>1000 /-</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div style={style.marginImg}>
                            <div style={style.bs1}>
                                <div className={"car p-2"} style={style.car}>

                                    <img src={month_logo} style={style.dashboardImg} alt=""/>

                                    <div style={style.imgContent}>
                                        <div>
                                            <p style={style.paragraph}>Month Earning</p>
                                            <p style={style.paragraph}>1000 /-</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={year_logo} style={style.dashboardImg} alt=""/>

                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Year Earning</p>
                                                <p style={style.paragraph}>1000 /-</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </Col>
                    </Row>
                </div>


                <div className="content" style={style.content}>
                    {classes.children}
                </div>

            </div>

        )
    }

}

export default withStyles(style)(CheckFinalReport)