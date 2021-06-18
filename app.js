const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const tasksRouter = require("./routes/tasksRouter");
const connectDB = require("./database/connect");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

// middleware

app.use(express.static("./public"));
app.use(express.json());

// router

app.use("/api/v1/tasks", tasksRouter);

// error handling

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// connect to database

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(`Server listening on port ${process.env.PORT || 5000}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
