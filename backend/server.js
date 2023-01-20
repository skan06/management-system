const express = require("express");
const app = express();
const mongoose=require("mongoose")

require("dotenv").config();
// 6 Connect DB
const connectdata = require("./config/connectdb");
mongoose.set('strictQuery', true);
connectdata();
// 3 Creation port
const port = process.env.PORT;
// 8 Middleware
app.use(express.json());
// 7 Creation of routes
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/pages', require("./routes/pageRoutes"));
// 5 Creation de serveur
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server is runnig on ${port}`);
});
