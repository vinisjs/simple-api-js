import { Router } from "express";
import { getPayment } from "../controllers/payment.controller.js";

const Payment = Router();

Payment.route("/")
  .get(async (req, res) => {
    console.log(req)
    console.log("recive from mobile")
    getPayment(req, res);
  })

  .post(async (req, res) => {
    getPayment(req, res);
  })

  .put(async (req, res) => {
    console.log("pro");
    res.json("put")
  })

  .delete(async (req, res) => {
    console.log("pro");
    res.json("delete")
  })

Payment.route("/:id")
  .post(async (req, res) => {
    console.log(req.params);
    res.json("put");
  })

  .put(async (req, res) => {
    console.log(req.params);
    res.json("put")
  })

  .delete(async (req, res) => {
    console.log(req.params);
    res.json(req.params)
  })

export default Payment;