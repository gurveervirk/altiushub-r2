import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import SideNav from './components/SideNav';
import Home from './components/Home';
import Invoices from './components/InvoiceListComponent';
import InvoiceDetailsComponent from './components/InvoiceDetailsComponent';
import './App.css';

function App() {
  const [invoices, setInvoices] = useState([
      {
          "Id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
          "Date": "2021-01-01",
          "InvoiceNumber": 1,
          "CustomerName": "John Doe",
          "BillingAddress": "123 Main St, Anytown, USA",
          "ShippingAddress": "123 Main St, Anytown, USA",
          "GSTIN": "GSTIN123",
          "Items": [
              {
                  "Id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
                  "itemName": "Item 1",
                  "quantity": 1,
                  "price": 100,
                  "amount": 100
              }
          ],
          "BillSundrys": [
              {
                  "Id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bef",
                  "billSundryName": "Discount",
                  "amount": 10
              }
          ],
          "TotalAmount": 90
      }
  ]);
  return (
    <div className="App">
      <Router>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/invoices" element={<Invoices invoices={invoices}/>}/>
          <Route path="/invoiceDetails/:id" element={<InvoiceDetailsComponent invoices={invoices} setInvoices={setInvoices}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
