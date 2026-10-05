const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

require("dotenv").config();

const MONGO_URL = process.env.ATLASDB_URL;
const MAPBOX_TOKEN = process.env.MAP_TOKEN;

main()
  .then(() => {
    console.log("Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const getCoordinates = async (location, country) => {
  const address = `${location}, ${country}`;

  const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
    address,
  )}&access_token=${MAPBOX_TOKEN}&limit=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Mapbox error: ${response.status}`);
  }

  const data = await response.json();

  if (!data.features.length) {
    throw new Error(`Location not found: ${address}`);
  }

  return data.features[0].geometry.coordinates;
};

const initDB = async () => {
  await Listing.deleteMany({});

  const listings = [];

  for (const obj of initData.data) {
    console.log(`Finding coordinates for ${obj.location}, ${obj.country}`);

    const coordinates = await getCoordinates(obj.location, obj.country);

    listings.push({
      ...obj,
      owner: new mongoose.Types.ObjectId("6ac3d5f27ecb2d7903240e01"),
      geometry: {
        type: "Point",
        coordinates: coordinates,
      },
    });
  }

  await Listing.insertMany(listings);

  console.log("Data was initialized");

  await mongoose.connection.close();
};

initDB();
