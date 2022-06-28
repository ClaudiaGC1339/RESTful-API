import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS anime (anime_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, studio TEXT, theme_song TEXT);`;

async function createAnimeTable() {
  const res = await query(sqlString);
  console.log(res.command, "Table has been created");
}
createAnimeTable();
