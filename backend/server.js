const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" }); // Handling form data

// Connect to MongoDB using Mongoose
mongoose.connect(
    "mongodb+srv://test-user:test123@alpha-cluster.bhpfivu.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
const db = mongoose.connection;

// Define a schema for your data
const travelSchema = new mongoose.Schema({
    name: String,
    cnic: String,
    previous: String,
    experience: String,
    picture: String,
});

// Create a model based on the schema
const Travel = mongoose.model("Travel", travelSchema);




app.post("/createCV", upload.single("picture"), async (req, res) => {
    const { name, cnic, previous, experience } = req.body;
    const picture = req.file.filename;
    console.log(req.body);

    try {
        // Create a new instance of the Travel model
        const newTravel = new Travel({
            name,
            cnic,
            previous,
            experience,
            picture,
        });

        await newTravel.save(); // Use await to wait for the save operation to complete

        res.send("Task done successfully!");
    } catch (err) {
        console.error("Error inserting data: " + err.stack);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3054, () => {
    console.log("task is running on http://localhost:3054");
});