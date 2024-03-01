class homePage {
    url = "https://www.simplyhealth.co.uk";

    visit() {
        browser.navigateTo(this.url);
    }
}

export default new homePage();