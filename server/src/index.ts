import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
// import router from "./router";
import router from './router'

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.use("/", router()); 
server.listen(8080, () => {
  console.log("Server is Running on http://localhost:8080");
});

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb+srv://arunfloyd:7yGlqYToYq4NHG19@cluster0.qsbejnh.mongodb.net/ReactCRUD"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
mongoose.connection.on("error", (error: Error) => console.log(error));
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello");
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



