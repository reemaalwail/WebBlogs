const express = require("express");
const blogController = require("../constrollers/blogController");
const router = express.Router();

//this blog routes
router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

/*
//mongoose and mongoo setbox to router
router.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2 reem",
    snippet: "about new blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/all-blog", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/single-blog", (req, res) => {
  Blog.findById("5ef5641b796317326b1557c4")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

//delete item

//blogs code

router.delete("/:id", blogController.blog_delete);

module.exports = router;
