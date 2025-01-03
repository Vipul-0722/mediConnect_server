const express = require("express")
const app = express()
require("dotenv").config()
const dbConfig = require("./config/dbConfig")
app.use(express.json())
const userRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRoute")
const doctorRoute = require("./routes/doctorsRoute")
const path = require("path")
const cors = require('cors');
app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));
app.use("/api/user", userRoute)
app.use("/api/admin", adminRoute)
app.use("/api/doctor", doctorRoute)

const port = process.env.PORT || 5000

app.get("/", (req, res) => res.send("Hello World!"))
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`))
