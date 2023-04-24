const express = require("express");
const app = express();
const cors = require("cors");
const cookieparser = require('cookie-parser');
const port = process.env.PORT || 5000;

//  swagger integration
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

require("dotenv").config({ path: "./config.env" });
app.use(cors());
app.use(express.json());
app.use(cookieparser());

//usage of routes
app.use(require("./routes/user"));
app.use(require("./routes/auth"));
app.use(require("./routes/category"));
app.use(require("./routes/subCategory"));
app.use(require("./routes/shoppingCart"));
app.use(require("./routes/command"));
app.use(require("./routes/favorites"));
app.use(require("./routes/product"));

// get driver connection
const dbo = require("./db/conn");

//  swagger integration route
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});