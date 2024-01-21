require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth-route");
const contactRoute = require("./routes/contact_router");
const ServiceRoute = require("./routes/service-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./midlewears/error_middlewear");


// handling cors policy 
const corsoptions = 
{
  origin: "http://localhost:5173",
  methods: "GET, POST, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsoptions));

app.use(express.json());



// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", ServiceRoute);



app.use(errorMiddleware);


const PORT = 5000;

connectDb().then(() =>{

  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});