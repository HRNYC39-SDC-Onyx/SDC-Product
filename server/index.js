const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("../db/index.js");
const router = require('./routes.js');

const { getProductList, getProductInfo, getRelatedProducts } = require('./controller.js');

app.use(express.json());
app.use('/products', router);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`)}
)

app.get('/', (req, res) => {
  res.json("hello! 🐳")
})

app.get("/loaderio-c94e2303cf9ee4a5d51191949bc39b8d.txt", (req, res) => {
  res.sendFile(`${__dirname}/./loaderio.txt`);
});




