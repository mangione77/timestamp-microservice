Timestamp Microservice
======================

# Description

This repo contains an exercise from [FreeCodecamp](https://www.freecodecamp.org/challenges/timestamp-microservice) - a timestamp microservice. Users can input a string. If this string is a valid date, the API will format it to a UNIX timestamp and a date with format _(MMMM D, YYYY)_.  

## Usage

```js
`https://secret-shelf-27952.herokuapp.com/date/{inputValue}`
```

Where _inputValue_ is a UNIX timestamp or a valid date.

### Running it locally

This project is hosted in [Heroku](https://secret-shelf-27952.herokuapp.com/date) - however you can run it locally by:

- Git cloning this repo:
```bash
git clone https://github.com/mangione77/timestamp-microservice
```

- _cd_'ing into it and running:
```bash
npm install
```

#### Dependencies

```js
  "dependencies": {
    "cors": "^2.8.4",
    "dotenv": "^4.0.0",
    "express": "^4.16.2",
    "moment": "^2.19.4",
    "pug": "^2.0.0-rc.4"
  }
```

