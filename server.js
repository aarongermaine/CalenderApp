const express = require("express");
const session = require("express-session");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client")));

app.use(
  session({
    secret: "secret",
    
  })
);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
