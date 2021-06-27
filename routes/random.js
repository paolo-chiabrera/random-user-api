const express = require('express');

const faker = require('faker');
const zipcodes = require('zipcodes');

const router = express.Router();

const getRandomData = () => ({
  email: faker.internet.email().toLowerCase(),
  name: faker.name.firstName(),
  pwd: faker.internet.password(),
  surname: faker.name.lastName(),
  username: faker.internet.userName(),
  zipcode: zipcodes.random(),
});

router.get('/random', (req, res) => {
  res.json(getRandomData());
});

router.get('/random/download', (req, res) => {
  const data = getRandomData();

  res.set('Content-disposition', `attachment; filename=${data.username}.json`);
  res.send(JSON.stringify(data, null, 2));
});

module.exports = router;
