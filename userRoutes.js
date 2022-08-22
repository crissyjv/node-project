const express = require("express");
const router = express.Router();
const userModel = require("../models/userSchema");

router.post("/userDetails", (req, res) => {

    const user = new userModel(req.body);

    user.save((err, savedUser) => {
        if (err) {
            res.json(err);
        } else {
            res.json(savedUser);
        }
    })

});
router.get("/gamers/:username/:password", (req, res) => {
    if (err || !user) {
        res.status(400).json("Invalid Login Credentials")
    } else {
        res.status(200).json({ userId: req.params.userId, message: "Login Successful" })

    }

});
//register new gamers or sellers
router.post("/register", (req, res) => {
    if (!err) {
        const register = new userModel(req.body);
        user.save((err, savedUser) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(savedUser)
            }

        })
    } else {
        res.status(400)json("please provide email,contact number and userType")
    }
});
//homepage API
products = [{
    productID : 121,
    title : "car",
    thumbnailURL : "",
    sellerUsername :"",
    unitsAvailable:"",
    productType:"",
    rentalPriceperWeek:"",
   rentalPriceperMonth:""

}]

router.get("/fetch",(req,res)=>{
res.json(products)
});


//productDetails





module.exports = router;