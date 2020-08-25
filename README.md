# Mars Weather API

## Introduction

The project demonstrates _data caching_, _rate limiting_ and _setting up proxy for API calls_ to mask API keys when making call to external servers.

Please don't forget to run `npm config set ignore-scripts true` to avoid running post install scripts incase there's a malicious package in npm that would destroy the world as we know it.

Made while watching [Coding Garden](https://twitch.tv/codinggarden) stream on Twitch.

## Installation

- `npm install`

- Create a `.env` file with Port, API key and NODE_ENV. See the included `.env.sample`

- `node index.js` or `nodemon index.js`
