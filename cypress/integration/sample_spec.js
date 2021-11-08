describe('My first test', function () {
    it('Visits the kitchen sink', function (){
        cy.visit('https://example.cypress.io')        
    })
    it("Finds the element", function () {
      cy.visit("https://example.cypress.io");
      cy.contains("type");
    });
    it("Clicks the element", function () {
      cy.visit("https://example.cypress.io");
      cy.contains("type").click();
    });
    it("Makes an assertion", function () {
      cy.visit("https://example.cypress.io");
      cy.contains("type").click();
      cy.url()
      .should('include','/commands/actions')
    });
    it("Gets, types and asserts", function () {
      cy.visit("https://example.cypress.io");
      cy.pause();
      cy.contains("type").click();
      cy.url().should("include", "/commands/actions");
      cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value','fake@email.com')
    });
    it('The test', () => {
        cy.visit("https://www.gamesforthebrain.com/game/checkers/");
    });

})