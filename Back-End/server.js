const express = require("express") ;
const cors = require("cors");
const app = express();

const routes = require("./Routes/auth.route")
require("dotenv").config({path: "./config/.env"})
require("./config/db")

app.use(cors());
app.use(express.json())

PORT = process.env.PORT || 8080;

//routes
app.use("/api", routes)
//runnig server on the port
app.listen(PORT , () =>{
    console.log(`Application running on port : ${PORT}`);
});