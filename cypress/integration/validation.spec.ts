describe("weather app", () => {
  it("check lat validation", () => {
    websiteIsOpened();

    wrongLatValue("92.420");

    displaysError("Must be between -90 and 90");
  });

  it("check lon validation", () => {
    websiteIsOpened();

    wrongLonValue("-182.420");

    displaysError("Must be between -180 and 180");
  });

  it("check when empty input", () => {
    websiteIsOpened();

    emptyLonInput();
    emptyLatInput();

    displaysError("Required");
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}

function wrongLatValue(lat: string) {
  cy.get("#lat").clear();
  cy.get("#lat").type(lat);
  cy.get("button").click();
}

function displaysError(result: string) {
  cy.get("div").contains(result);
}

function wrongLonValue(lon: string) {
  cy.get("#lon").clear();
  cy.get("#lon").type(lon);
  cy.get("button").click();
}

function emptyLonInput() {
  cy.get("#lon").clear();
  cy.get("button").click();
}

function emptyLatInput() {
  cy.get("#lat").clear();
  cy.get("button").click();
}

export {};
