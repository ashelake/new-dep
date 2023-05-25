const express = require('express');
const { Mydata } = require('../model/asset.modal');
const router = express.Router()


router.get('/', function (req, res) {
    res.send("Hello, world!")
})

router.post("/create", async (req, res) => {

    await Mydata.insertMany(req.body);
    res.send("Data");
});


router.get("/list", async (req, res) => {
    let data = await Mydata.find()
    res.send(data)
})
module.exports = router