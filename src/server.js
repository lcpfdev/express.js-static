const express = require("express"); //Lets us use express.js
const app = express(); // Creates webserver and stores in app

app.use("/static", express.static("public")); // Targets our public folder

app.listen(5001, () => {
    console.log("Listening on port 5001")
} )