describe("weather app", () => {
  it("display new data weather", () => {
    websiteIsOpened();

    inputValue("54.35", "18.6667");

    displaysCity("Gdańsk");
    displaysWeatherData();
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function inputValue(lat: string, lon: string) {
  cy.get("#lat").clear();
  cy.get("#lon").clear();
  cy.get("#lat").type(lat);
  cy.get("#lon").type(lon);
  cy.get("button").click();
}

function displaysCity(result: string) {
  cy.get("h3").contains(result);
}

function displaysWeatherData() {
  cy.get("div").contains("Temperature: ").should("not.be.empty");
  cy.get("div").contains("Pressure: ").should("not.be.empty");
  cy.get("div").contains("Humidity: ").should("not.be.empty");
}

export {};
