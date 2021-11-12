const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./Routes/index.js");
const db = require("./database");
require("dotenv").config();
const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.use("/api", router);

const allowedOrigins = [
  "http://localhost:3000",
  "https://618ef857409fdb0007384d52--brave-raman-0b2501.netlify.app/",
];
server.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
