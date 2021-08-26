const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("dotenv").config();

const port = 5000;

const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9wgmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const appointmentCollection = client
    .db("doctorsChember")
    .collection("appointments");

  app.post("/addAppointment", (req, res) => {
    const appointment = req.body;
    console.log(appointment);
    appointmentCollection.insertOne(appointment).then((result) => {
      res.send(result.insertedCount);
    });
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port);