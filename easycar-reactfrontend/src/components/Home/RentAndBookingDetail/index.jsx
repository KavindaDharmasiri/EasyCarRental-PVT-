import {Component} from "react";
import {withStyles} from "@mui/styles";
import {style} from "./style";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Divider} from "antd";

class DefaultRentAndBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;

        const columns: GridColDef[] = [
            { field: 'id', headerName: 'DriverID', width: 130 },
            { field: 'bDate', headerName: 'Borrow Date', width: 130 },
            { field: 'eDate', headerName: 'End Date', width: 130 },
            {field: 'onGoing', headerName: 'Success', width: 130,},
            {field: 'ttl', headerName: 'Total', type: 'number', width: 130,},
        ];

        const rows = [
            { id: 1, eDate: 'Snow', bDate: 'Jon', ttl: 35 ,onGoing : 'yes' },
            { id: 2, eDate: 'Lannister', bDate: 'Cersei', ttl: 42 ,onGoing : 'yes'},
            { id: 3, eDate: 'Lannister', bDate: 'Jaime', ttl: 45,onGoing : 'yes' },
            { id: 4, eDate: 'Stark', bDate: 'Arya', ttl: 16 ,onGoing : 'yes'},
            { id: 5, eDate: 'Targaryen', bDate: 'Daenerys', ttl: null ,onGoing : 'yes'},
            { id: 6, eDate: 'Melisandre', bDate: null, ttl: 150 ,onGoing : 'yes'},
            { id: 7, eDate: 'Clifford', bDate: 'Ferrara', ttl: 44 ,onGoing : 'yes'},
            { id: 8, eDate: 'Frances', bDate: 'Rossini', ttl: 36 ,onGoing : 'yes'},
            { id: 9, eDate: 'Roxie', bDate: 'Harvey', ttl: 65 ,onGoing : 'yes'},
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

                <Divider type={'horizontal'} dashed style={style.divider}>Your Booking Details</Divider>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            </div>

        )
    }

}

export default withStyles(style)(DefaultRentAndBooking)