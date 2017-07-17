import database from "./locations.json";

export const getLocationById = id => database[id];
