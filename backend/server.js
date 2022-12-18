const express =require("express")
const dotenv= require("dotenv")
const connectDB =require("./config/db.js");
const noteRoutes = require("./routes/noteRoutes.js")
const userRoutes= require("./routes/userRoutes.js")
const { errorHandler, notFound }=require("./middleware/errorMiddleware.js")
const cors=require('cors');

dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data
app.use(cors());

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
