describe("weather app", () => {
  it("display default view", () => {
    websiteIsOpened();

    inputValue("50.45466", "30.5238");
    openWeatherNotSelected();
    weatherbitSelected();

    displaysCity("Kiev");
    displaysWeatherData();
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function inputValue(lat: string, lon: string) {
  cy.get("#lat").should("have.value", lat);
  cy.get("#lon").should("have.value", lon);
}

function displaysCity(result: string) {
  cy.get("h3").contains(result);
}

function displaysWeatherData() {
  cy.get("div").contains("Temperature: ").should("not.be.empty");
  cy.get("div").contains("Pressure: ").should("not.be.empty");
  cy.get("div").contains("Humidity: ").should("not.be.empty");
}

function openWeatherNotSelected() {
  cy.get('[role="radiogroup"]')
    .find('[value="openWeather"]')
    .should("be.not.checked");
}

function weatherbitSelected() {
  cy.get('[role="radiogroup"]')
    .find('[value="weatherbit"]')
    .should("be.checked");
}

export {};
