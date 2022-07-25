import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Col, Row} from 'antd';
import day_logo from "../../../assets/img/day.png";
import month_logo from "../../../assets/img/month.png";
import year_logo from "../../../assets/img/year.jpg";
import GetService from "../../../services/GetService";

class CheckFinalReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            totalYear: '',
            totalMonth: '',
            totalDay: '',
            id: ''
        }
    }

    async componentDidMount() {
        this.loadData()
    }

    async loadData() {
        let res = await GetService.fetchAllPayments();

        this.setState({
            data: res.data.data
        })

        if (res.status === 200) {
            this.load()

        } else {
            console.log("fetching error: " + res)
        }
    }

    async load() {
        var cTime = String(new Date());
        var dte = String(cTime.slice(11, 15))
        var dteDay = String(cTime.slice(8, 10))
        var dteMonth = "08"

        let tempYear = 0
        let tempMonth = 0
        let tempDay = 0
        for (let i = 0; i < this.state.data.length; i++) {
            let year;
            year = this.state.data[i].date
            let yea = String(year.slice(5, 9));

            let dayy = String(year.slice(13, 15));

            let montt = String(year.slice(10, 12));

            if (yea === dte) {
                tempYear = tempYear + this.state.data[i].total
            }

            if (dayy === dteDay) {
                tempDay = tempDay + this.state.data[i].total
            }

            if (montt === dteMonth) {
                tempMonth = tempMonth + this.state.data[i].total
            }
        }
        this.setState({
            totalYear: tempYear,
            totalMonth: tempMonth,
            totalDay: tempDay
        })
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
                    <Row justify={"center"}>
                        <Col style={style.col}>

                            <div style={style.marginImg}>
                                <div style={style.bs1}>
                                    <div className={"car p-2"} style={style.car}>

                                        <img src={day_logo} style={style.dashboardImg} alt=""/>

                                        <div style={style.imgContent}>
                                            <div>
                                                <p style={style.paragraph}>Day Earning</p>
                                                <p style={style.paragraph}>{this.state.totalDay}</p>
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
                                                <p style={style.paragraph}>{this.state.totalMonth}</p>
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
                                                <p style={style.paragraph}>{this.state.totalYear}</p>
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