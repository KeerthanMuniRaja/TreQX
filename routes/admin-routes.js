const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware')


const router = express.Router()

router.get('/welcome',authMiddleware,adminMiddleware,(req,res)=>{
    return res.status(200).json({
        success : true,
        message : 'Admin successfully logged in'
    })
})

module.exports = router;