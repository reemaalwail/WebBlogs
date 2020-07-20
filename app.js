//express

const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const { result } = require("lodash");
const { create } = require("./models/blog");
const { render } = require("ejs");

//connect to mongodb
const dbURL =
  "mongodb+srv://devmulan:test1234@nodetest-wernm.mongodb.net/node-test?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//resgister ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //مهمه
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
  /*
  const blogs = [
    {
      title: "yoshi finsds eggs ",
      snippet: "lorem ispsum dolor site amet consectetur",
    },
    {
      title: "mario finsds stars ",
      snippet: "lorem ispsum dolor site amet consectetur",
    },
    {
      title: "how to finsds bowser ",
      snippet: "lorem ispsum dolor site amet consectetur",
    },
  ];
  res.render("index.ejs", { title: "Home", blogs });
  */
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { title: "about" });
});

/*
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
// redirect
app.get("/about-us", (req, res) => {
  //in express to convert url about-us to about  ease
  res.redirect("./about");
});
//page 404
app.use((req, res) => {
  res
    .status(404) 
    .sendFile("./views/404.html", { root: __dirname });
});

*/
//blog routes
app.use("/blogs", blogRoutes);
app.use((req, res) => {
  res.status(404).render("404.ejs", { title: "404" });
});
