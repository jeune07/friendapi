const router = require('express').Router();

// router.get("/", (req, res)=>{
//     res.send("{ name: jeune, Lname: Winsley}")
// })

// router.get("/winsley", (req,res)=>{
//     res.send("{name:winsley, Lname: Jeune, Phone: 5088184501, adrress: Brockton}")
// })

router.use('/friends', require('./friends'));
module.exports = router;
