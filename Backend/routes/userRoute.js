const express=require('express')
const userController=require('../controllers/userController')
const router=express.Router()

//creating request
router.post('/post',userController.createdetails)
router.get('/getall',userController.getAll)

module.exports=router