import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import fir_logo from "../../../assets/img/firstCar.jpg";
import sec_logo from "../../../assets/img/secCar.jpg";
import thir_logo from "../../../assets/img/thirCar.jpg";

class FirstHomePage extends Component {
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


                            <div style={style.butn}>
                                <button style={style.btn1}><Link to={'/register'}>Register</Link></button>
                                <button style={style.btn1}><Link to={'/login'}>Login</Link></button>
                            </div>

                        </div>
                    </div>
                </div>


                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={fir_logo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to Easy Car Rental (PVT)</h3>
                            <p>since 2022</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={sec_logo}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>We have big car collection</h3>
                            <p>since 2022.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={thir_logo}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>always you can hire vehicle</h3>
                            <p>since 2022.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>


        )
    }

}

export default withStyles(style)(FirstHomePage)