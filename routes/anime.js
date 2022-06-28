import express from "express";
import { anime } from "../libs/data.js";
import {
  getAnime,
  searchAnimeById,
  createAnime,
  updateAnimeById,
  deleteAnimeById,
} from "../models/data.js";

const animeRouter = express.Router();

//get all anime
animeRouter.get("/", (req, res) => {
  const result = getAnime();
  res.json({ success: true, payload: result });
});

//get anime by ID
animeRouter.get("/:id", (req, res) => {
  const searchedID = Number(req.params.id);
  const anime = searchAnimeById(searchedID);
  res.json({ success: true, payload: anime });
});

//add a new anime
animeRouter.post("/", (req, res) => {
  const newAnime = req.body;
  const result = createAnime(newAnime);
console.log(req.body);
  //anime.push(newAnime);

  const responseObject = {
    success: true,
    payload: result,
  };

  res.json(responseObject);
});

//update anime by ID
animeRouter.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedAnime = req.body;
  const result = updateAnimeById(id, updatedAnime);

  const responseObject = {
    success: true,
    payload: result,
  };

  res.json(responseObject);
});

//delete anime by ID
animeRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const result = deleteAnimeById(id);

  const responseObject = {
    success: true,
    payload: result,
  };

  res.json(responseObject);
});

export default animeRouter;
