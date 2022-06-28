
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

import animeRouter from "./routes/anime.js";
import indexRouter from "./routes/index.js";

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});

app.use(express.json());
app.use("/", indexRouter);
app.use("/anime", animeRouter);


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

/*async function getAnime(){
  let response = await fetch ("http://localhost:3000/anime/");
  let data = await response.json();
  console.log(data);
}
getAnime();*/

export default app;