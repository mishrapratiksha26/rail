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
    const {from,to,date}=req.query;
    
  var config = {
    method: "get",
    url: `https://indian-railway-api.cyclic.app/trains/gettrainon?from=${from}&to=${to}&date=${date}`,
    headers: {},
  };

  const response = await axios(config);
  res.send(JSON.stringify(response.data));
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
