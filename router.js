//import express
const express = require('express')
//import user controller

const userController = require('./controllers/userController.js')
//add controller
const projectController=require('./controllers/projectController')

const jwtMiddleware = require('./middleware/jwtMiddleware.js')

const multerConfig = require('./middleware/multerMiddleware.js')

//instance router

const router = new express.Router()

//Register
router.post('/register',userController.register)

//login
router.post('/login', userController.login)

//add project
router.post('/add-project',jwtMiddleware,multerConfig.single("projectimage"),projectController.addProjectController)

//all project
router.get('/all-project',jwtMiddleware ,projectController.getAllProjectController)

//home
router.get('/home-project',projectController.getHomeProjectController)


//user project
router.get('/user-project',jwtMiddleware,projectController.getUserProjectController)

//remove user project
router.delete('/remove-userproject/:id', jwtMiddleware, projectController.removeUserProjectController)

//update user project
router.put('/update-userProject/:id', jwtMiddleware, multerConfig.single('projectimage'), projectController.editProjectController)

//update user
router.put('/update-userProfile', jwtMiddleware, multerConfig.single("profile"), userController.editProfileController)

module.exports = router;

