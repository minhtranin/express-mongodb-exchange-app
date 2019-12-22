'use strict'
const app = require('express')()
const swaggerUi = require("swagger-ui-express")
const config = require('./config')
const routerAdmin = require('./modules/admin/route')
const swaggerDocs = require('./swagger')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(process.env.PORT)
app.get("/",(req,res)=>{return res.redirect('/api-docs')})
app.use('/api/v1/admin',routerAdmin)
module.exports = app
console.log(process.env.PORT)
