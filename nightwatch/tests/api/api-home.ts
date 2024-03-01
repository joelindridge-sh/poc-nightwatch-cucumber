import { When, Then } from '@cucumber/cucumber';
import homePage from '../../pages/homePage';
import request from 'supertest';
const assert = require("assert").strict;

When('I make a GET request to the home page', async function() {
  await request('').get(homePage.url)
      .then(response => {
        this.response = response;
      });
})

Then('the response status is {int}', function(int: number) {
  assert.equal(this.response.statusCode,int)
})