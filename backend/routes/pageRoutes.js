const router = require("express").Router();
const Page = require("../models/pageModel");

//create a new page
router.post("/", async (req, res) => {
  const newPage = new Page(req.body);
  try {
    const savedPage = await newPage.save();
    res.status(200).json(savedPage);
  } catch (err) {
    res.status(500).json("post creation failed");
  }
});

//update page
router.put("/:id", async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (page.userId === req.body.userId) {
      await page.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete page
router.delete("/:id", async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (page.userId === req.body.userId) {
      await page.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get page
router.get("/:id", async (req, res) => {
    try {
      const page = await Page.findById(req.params.id);
      res.status(200).json(page);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get all pages
router.get("/", async (req, res) => {
    try {
      const page = await Page.find();
      res.status(200).json(page);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;