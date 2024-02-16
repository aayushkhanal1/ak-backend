var express = require('express')
const router =  express.Router()
const controller=require('./controller')

router
.get("/",controller.homepage)
.get("/about",controller.aboutpage)
.get("/contact",controller.contactpage)


// .get("/posts",controller.posts)
.get("/users",controller.users)

.post("/add/users",controller.adduser)
.post("/register",controller.register)
.post("/login",controller.login)
.delete("/deleteuser/:id",controller.deleteuser)
  module.exports = router;