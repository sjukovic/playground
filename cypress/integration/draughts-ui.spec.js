describe('Shuffle the Cards', function () {

   it("Make a GET request, count=1", () => {
      
    //todo - capture deck_id for later use
      cy.visit('https://www.gamesforthebrain.com/game/checkers/')
     
      cy.get(
        ".img > div:nth-child(1) > div > div > div:nth-child(1)"
      ).should("have.text", "name");
    
      });
    });