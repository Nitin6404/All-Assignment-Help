const express = require('express');
const app = express();
const OrdersRouter = require('./routes/OrdersRoute');
const AdminRouter = require('./routes/AdminRoute');
const UserRouter = require('./routes/UserRoute');
const cors = require('cors');


const port = process.env.PORT || 4000; 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', OrdersRouter);
app.use("/admin/", AdminRouter);
app.use("/user/", UserRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
