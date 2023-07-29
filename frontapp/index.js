// importing express module to application
const express = require("express");
const path = require("path");

const app = express(); // creating an instance of the express application

// Express to recognize the static files like css images and related
app.use(express.static("client/build"));

// Defining my route (mapping the incoming request to request handler(callback function))
app.get("*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000; // PORT is a reference to an environment variable named PORT

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
