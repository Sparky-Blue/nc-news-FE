describe("nc-news-FE", function() {
  it("links to topic", function() {
    cy.visit("http://localhost:3000/");

    cy.contains("Coding").click();

    cy.url().should("include", "/coding/articles");
  });

  it("allows users to signout and in in and out", function() {
    cy.visit("http://localhost:3000");

    cy
      .get("button")
      .contains("Sign out")
      .click();

    cy.get(".username").type("jessjelly");

    cy
      .get("button")
      .contains("Log in")
      .click();
  });
  it("allows users to vote on articles once", function() {
    cy.visit("http://localhost:3000");

    cy
      .get(".voteButton")
      .first()
      .click();

    cy
      .get(".voteButton")
      .first()
      .should("be.disabled")
      .and("not.have.class", "active");
  });
});
