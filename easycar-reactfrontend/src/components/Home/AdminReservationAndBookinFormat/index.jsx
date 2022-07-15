import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Divider} from "antd";


class DefaultAdminRentAndBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        const bookColumns: GridColDef[] = [
            {field: 'bOrR', headerName: 'Reservation/Booking', width: 130},
            {field: 'id', headerName: 'UserID', width: 130},
            {field: 'pId', headerName: 'PaymentID', width: 130},
            {field: 'vNo', headerName: 'VehicleRegisterNo', width: 130,},
            {field: 'bDate', headerName: 'Borrow Date', width: 130},
            {field: 'eDate', headerName: 'End Date', width: 130},
            {field: 'type', headerName: 'Type', width: 130,},
            {field: 'ttl', headerName: 'Total', type: 'number', width: 130,},
            {field: 'suc', headerName: 'Success', width: 130,},

        ];

        const bookRows = [
            {bOrR: 'b', id: 1, pId: 'Snow', vNo: 'Jon', bDate: '1', eDate: 'Snow', type: 'Jon', ttl: 35, suc: 'yes'},
            {bOrR: 'b', id: 2, pId: 'Snow', vNo: 'Jon', bDate: '1', eDate: 'Snow', type: 'Jon', ttl: 35, suc: 'yes'},
            {bOrR: 'R', id: 3, pId: 'Snow', vNo: 'Jon', bDate: '1', eDate: 'Snow', type: 'Jon', ttl: 35, suc: 'yes'},
            {bOrR: 'b', id: 4, pId: 'Snow', vNo: 'Jon', bDate: '1', eDate: 'Snow', type: 'Jon', ttl: 35, suc: 'yes'},
            {bOrR: 'b', id: 5, pId: 'Snow', vNo: 'Jon', bDate: '1', eDate: 'Snow', type: 'Jon', ttl: 35, suc: 'yes'},
        ];


        return (

            <div style={style.body}>
                <div style={style.bs1}>
                    <div className="header" style={style.header}>
                        <div className="d-flex justify-content-between">

                            <h1 style={style.h1}>Easy Car Rental(PVT)</h1>


                        </div>
                    </div>
                </div>

                <Divider type={'horizontal'} dashed style={style.divider}>Booking Details</Divider>

                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={bookRows}
                        columns={bookColumns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>

            </div>

        )
    }

}

export default withStyles(style)(DefaultAdminRentAndBooking)