const express = require('express')
const controller  = require('../controllers/blog.controller')
const blogsRoute = express.Router()

blogsRoute.get('/' , controller.getall)
blogsRoute.post('/create', controller.create)
blogsRoute.patch('/update/:id', controller.update)
blogsRoute.delete('/delete/:id', controller.delete)


module.exports={blogsRoute}