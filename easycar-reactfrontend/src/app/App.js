import React from "react";
import HomePage from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import BookingCar from "../pages/BookingCar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reser from "../pages/ReserveCar";
import BookingCarDet from "../pages/BookingCarDetail";
import ResCarDet from "../pages/ReservationCarDetail";
import RentAndBookDet from "../pages/RentAndBookingDetail";
import CarManage from "../pages/AdminCarManage";
import AdminDashBoard from "../pages/AdminDashBoard";
import AdminCarAdd from "../pages/AdminAddCar";
import AdminCarEdit from "../pages/AdminEditCar";
import AdminDriverManage from "../pages/AdminDriverManage";
import AdminDriverAdd from "../pages/AdminAddDriver";
import AdminDriverEdit from "../pages/AdminEditDriver";
import PaymentMdl from "../pages/PaymentModel";
import BookingAndReservationAdmin from "../pages/AdminReservationAndBooking";
import FinalReport from "../pages/CheckFinalResult";
import FirstPage from "../pages/FirstHomePage";
import DriverHome from "../pages/DriverHomePage";
import 'antd/dist/antd.css';


function App() {
    return (
        <Routes>
            <Route exact path='firstPage' element={<HomePage/>}/>
            <Route exact path='bookingCar' element={<BookingCar/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='reservation' element={<Reser/>}/>
            <Route path='bookingCarDet' element={<BookingCarDet/>}/>
            <Route path='resCarDet' element={<ResCarDet/>}/>
            <Route path='rentAndBookDet' element={<RentAndBookDet/>}/>
            <Route path='adminHome' element={<AdminDashBoard/>}/>
            <Route path='carManage' element={<CarManage/>}/>
            <Route path='carAdd' element={<AdminCarAdd/>}/>
            <Route path='carEdit' element={<AdminCarEdit/>}/>
            <Route path='driverManage' element={<AdminDriverManage/>}/>
            <Route path='driverAdd' element={<AdminDriverAdd/>}/>
            <Route path='driverEdit' element={<AdminDriverEdit/>}/>
            <Route path='paymentmdl' element={<PaymentMdl/>}/>
            <Route path='adminpanelbookingandreservation' element={<BookingAndReservationAdmin/>}/>
            <Route path='finalReport' element={<FinalReport/>}/>
                <Route path='driverHome' element={<DriverHome/>}/>

            <Route path='/' element={<FirstPage/>}/>

        </Routes>

    );
}

export default App;
