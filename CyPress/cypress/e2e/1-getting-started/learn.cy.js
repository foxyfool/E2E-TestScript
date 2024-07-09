/// <reference types="cypress" />;

describe("Testing app", () => {
  beforeEach(() => {
    cy.visit("https://learn-swift.vercel.app/");
  });

  it("is able to log in", () => {
    cy.contains("Log in").should("exist");
    cy.contains("Log in").click();
    cy.contains("Sign Up").should("exist");
    cy.contains("Sign Up").click();
  });
});
