require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const corsOptions = require("./config/corsOptions.js");
const router = require("./router/index.js");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api", router);

const server = http.createServer(app);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Mongodb connected");
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log({ err });
    process.exit(1);
  });
