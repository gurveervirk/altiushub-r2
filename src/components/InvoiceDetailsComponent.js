import { FormControl } from '@mui/base/FormControl';
import { FormLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function InvoiceDetailsComponent({invoices, setInvoices}) {
    const params = useParams().id;
    const [openItem, setOpenItem] = useState(false);
    const [openBS, setOpenBS] = useState(false);
    const [items, setItems] = useState([]);
    const [billSundrys, setBillSundrys] = useState([]);
    const [invoice, setInvoice] = useState({});
    const [item, setItem] = useState({});
    const [billSundry, setBillSundry] = useState({});

    const handleClickOpenItem = () => {
        setOpenItem(true);
    };

    const handleCloseItem = () => {
        setOpenItem(false);
    };

    const handleAddItem = () => {
        setItems([...items, item]); // Add an empty item
        setItem({}); // Clear the item
        setOpenItem(false);
    };

    const handleClickOpenBS = () => {
        setOpenBS(true);
    };

    const handleCloseBS = () => {
        setOpenBS(false);
    };

    const handleAddBS = () => {
        setBillSundrys([...billSundrys, billSundry]); // Add an empty item
        setBillSundry({}); // Clear the item
        setOpenBS(false);
    };

    const handleSubmit = () => {
        if (items.length < 1) {
            alert('You must add at least one item.');
            return;
        }

    };

    if (params === '0') {
        return (
            <div style={{"width": "100%"}}>
            <h1>Create Invoice</h1>
            <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <br/>
            <TextField 
            id="date" 
            type="date" 
            onChange={(e) => setInvoice({...invoice, date: e.target.value})}
            />
            <br/>
            <FormLabel htmlFor="invoiceNumber">Invoice Number</FormLabel>
            <br/>
            <TextField 
            id="invoiceNumber" 
            type="number" 
            onChange={(e) => setInvoice({...invoice, invoiceNumber: e.target.value})}
            />
            <br/>
            <FormLabel htmlFor="customerName">Customer Name</FormLabel>
            <br/>
            <TextField 
            id="customerName" 
            onChange={(e) => setInvoice({...invoice, customerName: e.target.value})}
            />
            <br/>
            <FormLabel htmlFor="billingAddress">Billing Address</FormLabel>
            <br/>
            <TextField 
            id="billingAddress" 
            onChange={(e) => setInvoice({...invoice, billingAddress: e.target.value})}
            />
            <br/>
            <FormLabel htmlFor="shippingAddress">Shipping Address</FormLabel>
            <br/>
            <TextField 
            id="shippingAddress" 
            onChange={(e) => setInvoice({...invoice, shippingAddress: e.target.value})}
            />
            <br/>
            <FormLabel htmlFor="gstin">GSTIN</FormLabel>
            <br/>
            <TextField 
            id="gstin" 
            onChange={(e) => setInvoice({...invoice, gstin: e.target.value})}
            />
            <br/>
            <FormLabel htmlFor="items">Items: {items.length}</FormLabel>
            <br/>
            <Button variant="outlined" onClick={handleClickOpenItem}>
            Add Item
            </Button>
            <Dialog open={openItem} onClose={handleCloseItem}>
            <DialogContent>
                <FormControl>
                <FormLabel htmlFor="itemName">Item Name</FormLabel>
                <br/>
                <TextField id="itemName" onChange={(e) => setItem({...item, name: e.target.value})} />
                <br/>
                <FormLabel htmlFor="quantity">Quantity</FormLabel>
                <br/>
                <TextField id="quantity" type="number" onChange={(e) => setItem({...item, quantity: e.target.value})} />
                <br/>
                <FormLabel htmlFor="price">Price</FormLabel>
                <br/>
                <TextField id="price" type="number" onChange={(e) => setItem({...item, price: e.target.value})} />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseItem}>Cancel</Button>
                <Button onClick={handleAddItem}>Add</Button>
            </DialogActions>
            </Dialog>
            <br/>
            <FormLabel htmlFor="billSundrys">Bill Sundries</FormLabel>
            <br/>
            <Button variant="outlined">
            Add Bill Sundry
            </Button>
            <Dialog open={openBS} onClose={handleCloseBS}>
            <DialogContent>
                <FormControl>
                <FormLabel htmlFor="itemName">Bill Sundry Name</FormLabel>
                <br/>
                <TextField id="itemName" onChange={(e) => setBillSundry({...billSundry, name: e.target.value})} />
                <br/>
                <FormLabel htmlFor="quantity">Amount</FormLabel>
                <br/>
                <TextField id="quantity" type="number" onChange={(e) => setBillSundry({...billSundry, quantity: e.target.value})} />
                <br/>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseBS}>Cancel</Button>
                <Button onClick={handleAddBS}>Add</Button>
            </DialogActions>
            </Dialog>
            </FormControl>
            </div>
        )
    }
    return (
        <div style={{"width": "100%"}}>
            <h1>Update Invoice</h1>
            <p>Invoice ID: {params}</p>
        </div>
    )
}

export default InvoiceDetailsComponent;