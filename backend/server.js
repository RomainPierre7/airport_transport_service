const express = require('express');
const app = express();
const port = 5000;

const cookieParser = require('cookie-parser');
const cors = require('cors');

const busNetworkRouter = require('./routes/busNetwork');
const customerRouter = require('./routes/customer');
//const reservationRouter = require('./routes/reservation');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/busNetwork', busNetworkRouter);
app.use('/customer', customerRouter);
//app.use('/reservation', reservationRouter);

app.listen(port, () => {
    console.log(`Backend server started on port ${port}`);
});