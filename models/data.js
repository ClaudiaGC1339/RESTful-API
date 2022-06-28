import { anime } from "../libs/data.js";

export function getAnime() {
  return anime;
}

export function searchAnimeById(id) {
  const found = anime.find(function (anime) {
    return anime.id === id;
  });
  return found;
}

export function createAnime(data) {
  anime.push(data);
  return anime[anime.length - 1];
}

export function updateAnimeById(id, updates) {
  const foundIndex = anime.findIndex(function (anime) {
    return anime.id === id;
  });
  anime[foundIndex] = updates;
  return anime[foundIndex];
}

export function deleteAnimeById(id) {
  const foundIndex = anime.findIndex(function (anime) {
    return anime.id === id;
  });

  const item = anime[foundIndex];
  anime.splice(foundIndex, 1);
  return item;
}
