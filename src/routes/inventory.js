import { Router } from "express";

const Inventory = Router();

Inventory.route("/")
  .get((req, res) => {
    console.log("pro");
    res.send("get")
  })
  .post(async (req, res) => {
    res.send("post")
  })

Inventory.route('/:id')
  .get((req, res) => {
    console.log("")
  })
  .post((req, res) => {
    console.log("")
  })
  .put((req, res) => {
    console.log("pro");
    res.send("put")
  })
  .delete((req, res) => {
    console.log("pro");
    res.send("delete")
  })

export default Inventory;