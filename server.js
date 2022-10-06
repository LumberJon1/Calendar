const express = require("express");
const routes = require("./controller");
const path = require("path");
const sequelize = require("./config/connection");

// start Express server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.use(routes);

// TODO: Set up handlebars

// Instantiate Sequelize connection
sequelize.sync({force: false}).then(() => {
    // log success message
    app.listen(PORT, () => console.log("Listening on port "+PORT));
});