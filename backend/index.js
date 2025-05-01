import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import crypto from "crypto";
import "dotenv/config";
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-angadsudans-projects.vercel.app",
      process.env.FRONTEND_URL,
    ],
    methods: ["POST"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/order", async (req, res) => {
  try {
    console.log("instance creation started");
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    console.log("instance creation ended");

    //add actual recipt count later on
    const orderOption = {
      amount: req.body?.amount * 100 || 100, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt#1",
    };

    const order = await instance.orders.create(orderOption);
    console.log(order);

    if (!order) return res.status(500).send("Some error occured");
    res.status(200).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/payment/success", async (req, res) => {
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});

export default app;
