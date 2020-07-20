//blog_index ,blog_details, blog_create_get , blog_create_post , blog_delete
const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "all bloges reem", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_details = (req, res) => {
  //href when click to go new page
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", {
        blog: result,
        title: "Blog Details",
      });
    })
    .catch((err) => res.status(404).render("404", { title: "blog not found" }));
};

const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "create a new blog" });
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};
const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};
module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
