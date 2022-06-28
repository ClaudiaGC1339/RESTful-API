import express from 'express';
const router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", { title: "Anime" });
    next();
  });
  
  export default router;
