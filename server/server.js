import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'

const app = express();

// connect to mongodb database
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log("Database Connected Successful !");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Hello artbyutesh .");
});
