const express = require("express");
const app = express();
app.use(express.json());

//Import express, initialize it & set headers.
const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {

   res.setHeader("Access-Control-Allow-Origin", "*"); res.setHeader(
      "Access-Control-Allow-Methods",

      "GET, POST, OPTIONS, PUT, PATCH, DELETE"

   );

   res.setHeader(

      "Access-Control-Allow-Headers",

      "X-Requested-With,content-type"

   );

   res.setHeader("Access-Control-Allow-Credentials", true);

   next();

});

//Atur dua rute. Satu untuk tujuan pengujian dan satu lagi untuk implementasi aktual.

app.use("/testing", require("./routes/testing.routes.js"));
app.use("/students", require("./routes/students.routes.js"));
app.listen(process.env.PORT, () => {
   console.log(`App is currently running at http://localhost:${PORT}`);
});
