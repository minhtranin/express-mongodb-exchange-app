'use strict'
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "GCOM API",
      description: "classify app API",
      version:"3.0.0",
      contact: {
        name: "TCM"
      },
      basePath: '/',
      //servers: ["http://localhost:9090"]
    },
    securityDefinitions: {
      Bearer: {
          type: "apiKey",
          name: "Authorization",
          in: "header",
      },
    }
  },
  // ['.routes/*.js']
  apis: ["./modules/admin/Controllers/*",
  "./modules/customer/Controllers/*"
]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports =swaggerDocs