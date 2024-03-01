import { When, Then } from '@cucumber/cucumber';
import homePage from '../../pages/homePage';

When("I visit the home page", () => {
  homePage.visit()
});

When("I accept all cookies", () => {
  browser.click("button[id='onetrust-accept-btn-handler']");
});

Then('I should see the health plan link', () => {
  browser.element.find("a").findAllByText("Get a health plan");
});
