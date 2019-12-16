'use strict'
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:9090"]
    }
  },
  // ['.routes/*.js']
  apis: ["./modules/admin/Controllers/*"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports =swaggerDocs