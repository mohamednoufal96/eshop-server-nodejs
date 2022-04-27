const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const { response } = require("express");

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI;
mongoose
    .connect(mongoUri)
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((error) => {
        console.log("Error while connecting to database : ", error);
    });

app.use(cors());
app.use(express.json());

app.use("/api/test", (req, res) => {
    res.status(200).send("test success");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(port, () => {
    console.log("Server running on port : ", port);
});
