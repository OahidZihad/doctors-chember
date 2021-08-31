const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const fileUpload = require("express-fileupload");
app.use(express.static("doctors"));
app.use(fileUpload());

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

  const contactUsCollection = client
    .db("doctorsChember")
    .collection("contacts");

  app.post("/addAppointment", (req, res) => {
    const appointment = req.body;
    appointmentCollection.insertOne(appointment).then((result) => {
      res.send(result.insertedCount);
    });
  });

  app.post("/addContactUs", (req, res) => {
    const contactDetails = req.body;
    console.log(contactDetails);
    contactUsCollection.insertOne(contactDetails).then((result) => {
      res.send(result.insertedCount);
    });
  });

  app.post("/appointmentsByDate", (req, res) => {
    const date = req.body;
    console.log(date.date);
    appointmentCollection
      .find({ date: date.date })
      .toArray((err, documents) => {
        console.log(documents);
        res.send(documents);
      });
  });

  app.post("/addADoctor", (req, res) => {
    const fileName = req.files.file;
    const name = req.files.name;
    const email = req.files.email;
    console.log(name, email, fileName);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port);
