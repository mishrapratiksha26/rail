const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/proxy", async (req, res) => {
  var config = {
    method: "get",
    url: "https://indian-railway-api.cyclic.app/trains/gettrainon?from=BKSC&to=DHN&date=12-03-2023",
    headers: {},
  };

  const response = await axios(config);
  res.send(JSON.stringify(response.data));
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});