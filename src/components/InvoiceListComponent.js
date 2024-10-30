import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';
  
const columns: GridColDef[] = [
    { field: 'id', headerName: 'id', flex: 1},
    { field: 'Date', headerName: 'Date', flex: 1},
    { field: 'InvoiceNumber', headerName: 'Invoice Number', flex: 1},
    { field: 'CustomerName', headerName: 'Customer Name', flex: 1},
    { field: 'BillingAddress', headerName: 'Billing Address', flex: 1},
    { field: 'ShippingAddress', headerName: 'Shipping Address', flex: 1},
    { field: 'GSTIN', headerName: 'GSTIN', flex: 1},
    { field: 'Items', headerName: 'Items', flex: 1},
    { field: 'BillSundrys', headerName: 'Bill Sundries', flex: 1},
    { field: 'TotalAmount', headerName: 'Total Amount', flex: 1},
];

function InvoiceListComponent({invoices}) {
    let rows: GridRowsProp = invoices.map((invoice) => {
        return {
            ...invoice,
            id: invoice.Id, 
            Items: invoice.Items.length,
            BillSundrys: invoice.BillSundrys.length
        };
    });
    return (
        <div style={{ height: 300, width: '100%'}}>
            <h1>Invoice List View</h1>
            <Stack 
                spacing={2} 
                direction="row" 
                alignItems="center"
                justifyContent="center"
                sx = {{marginBottom: 2}}
            >
                <Button component={Link} to={"/invoiceDetails/0"} variant="contained" color="primary">Create Invoice</Button>
            </Stack>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onRowClick={(row) => {
                    window.location.href = `//invoiceDetails/${row.row.id}`;
                }}
                sx={{border: '1px solid #ccc', width: '100%'}}
            />
        </div>
    )
}

export default InvoiceListComponent;