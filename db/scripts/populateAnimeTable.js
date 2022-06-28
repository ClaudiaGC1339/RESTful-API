import { query } from "../index.js";
import { anime } from "../../libs/data.js";

const sqlString = `INSERT INTO anime(name, studio, theme_song) VALUES($1, $2, $3) RETURNING *;`;

async function populateAnimeTable() {
  for (let i = 0; i < anime.length; i++) {
    const params = [anime[i].name, anime[i].studio, anime[i].theme_song];
    const res = await query(sqlString, params);

    console.log(res.rows[0].name, "Has been inserted");
  }
}
populateAnimeTable();
