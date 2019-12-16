'use strict'
const express = require('express')
const app =express()

const swaggerUi = require("swagger-ui-express");
const config = require('./config')
const routerAdmin = require('./modules/admin/route')
const swaggerDocs = require('./swagger')
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(process.env.PORT)
app.get("/",(req,res)=>{return res.redirect('/api-docs')})
app.use('/api/v1/admin',routerAdmin)


