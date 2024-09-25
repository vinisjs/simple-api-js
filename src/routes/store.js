import { Router } from "express";

const Store = Router();

Store.route("/")
  .get(async (req, res) => {

  })

  .post(async (req, res) => {
    console.log(req.body)
  })


Store.route("/:id")
  .get(async (req, res) => {
    console.log(req.params);
  })

  .post(async (req, res) => {
    console.log(req.params);
  })

  .put(async (req, res) => {
    console.log(req.params);
    res.json("put")
  })

  .delete(async (req, res) => {
    console.log(req.params);
    res.json(req.params)
  })

export default Store;