const express = require('express');

const Moniker = require('moniker');
const capitalize = require('lodash.capitalize');
const faker = require('faker');
const zipcodes = require('zipcodes');

const router = express.Router();

const getRandomData = () => {
  let username = Moniker.choose();

  try {
    username = username.split('-').map(capitalize).join('');
  } catch (e) {
    console.error('Username manipulation', e);
  }

  return {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    username,
    zipcode: zipcodes.random(),
  };
};

router.get('/random', (req, res) => {
  res.json(getRandomData());
});

router.get('/random/download', (req, res) => {
  const data = getRandomData();

  res.set('Content-disposition', `attachment; filename=${data.username}.json`);
  res.send(JSON.stringify(data, null, 2));
});

module.exports = router;
