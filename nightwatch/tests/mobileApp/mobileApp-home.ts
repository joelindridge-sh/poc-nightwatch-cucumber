import {NightwatchAPI} from 'nightwatch';
import {When} from '@cucumber/cucumber';

When("I open SimplyPlan", async function(app:NightwatchAPI) {
  await app.click('tag name', 'co.uk.simplyhealth.simplyplan:tag/welcome-register-to-app');
});