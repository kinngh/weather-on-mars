const axios = require("axios");
const rateLimit = require("express-rate-limit");
const speedLimit = require("express-slow-down");

const express = require("express");
const router = express.Router();

const baseUrl = "https://api.nasa.gov/insight_weather/?";
var cacheData;
var cacheTime;

//Allow 20 calls in a 30 second window before rate limiting
const limit = rateLimit({
  windowMs: 30 * 1000,
  max: 20,
});

//After the first call, add 500ms to each subsequent call, reset when hit the 30 second mark
const speedLimiter = speedLimit({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 500,
});

//Create our own Api Key
const _apiKey = new Map();
_apiKey.set("12345", true);

router.get(
  "/",
  limit,
  speedLimiter,
  (req, res, next) => {
    const apiKey = req.get("X-API-KEY");
    if (_apiKey.has(apiKey)) {
      next();
    } else {
      const error = new Error("Invalid API KEY");
      next(error);
    }
  },
  async (req, res, next) => {
    //Cache data
    if (cacheTime && cacheTime > Date.now() - 30 * 1000) {
      return res.json(cachedData);
    }
    try {
      const params = new URLSearchParams({
        api_key: process.env.nasaApiKey,
        feedtype: "json",
        ver: "1.0",
      });
      const { data } = await axios.get(`${BASE_URL}${params}`);
      cachedData = data;
      cacheTime = Date.now();
      data.cacheTime = cacheTime;
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
