describe('Shuffle the Cards', function () {

   it("Make a GET request, count=1", () => {
      
    //todo - capture deck_id for later use
      cy.request(
       {        
        method:"GET",
        url:"https://deckofcardsapi.com/api/deck/new/shuffle",
        qs:{deck_count: 1}        
      }    
      )
    //     .then(response => {
    
    // const deck_id = response.body.property('deck_id')
    // cy.request({
    //   method: 'GET',
    //   url: 'https://deckofcardsapi.com/api/deck/'+ deck_id +'/draw/',
    //   cs:{
    //     count: 2
    //   }
    //   }      
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("success").is.true;
        expect(response).to.have.property("duration");
      });
    });
    
    //todo - fine tune response checks
     it("Make a GET request, deck_count >1 and <=6", () => {
       cy.request({        
        method:"GET",
        url:"https://deckofcardsapi.com/api/deck/new/shuffle",
        qs:{deck_count: 3}        
      }).should((response) => {
         expect(response.status).to.eq(200);
         expect(response.body).to.have.property("success").is.true;
       });
     });
   // todo: POST request 
    it("Make a POST request, deck_count > 1 and <=6", () => {
      cy.request({        
        method:"POST",
        url:"https://deckofcardsapi.com/api/deck/new/shuffle",
        qs:{deck_count: 3}        
      }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("success").is.true;
        expect(response).to.have.property("duration");
      });
    });
})

describe("Draw a Card", function() {
  it("Count as a positive number - NEW deck", () => {
    cy.request(
      "GET",
      "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
    ).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success").is.true;
      expect(response).to.have.property("duration");
    });
  });
  it("Count as a positive number - EXISTING deck", () => {
    cy.request(
      "GET",
      "https://deckofcardsapi.com/api/deck/new/draw/?count=2"
    ).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("success").is.true;
      expect(response).to.have.property("duration");
    });
  });
  //todo
  it("xCount as a negative number", () => {
    null;
  });

  //todo
  it("xCount as an alfanumeric", () => {
    null;
  });

});

//todo - implement
describe("Reshuffle the Cards", () => {
  it('Deck_id - valid', () => {
    null;
  });
  it('xDeck_id - invalid', () => {
    null;
  });
it('xDeck_id - NEW - invalid', () => {
  null;
});
it("Deck_id - valid - REMAINING:True", () => {
  null;
});
//todo - decide wether this one below is needed
it("Deck_id - valid - REMAINING:False", () => {
  null;
});

it("xDeck_id - valid - REMAINING:<empty>", () => {
  null;
});


});

describe("A Brand new deck", () => {

  it('Jokers enabled - True', () => {
    
  });


  it("Jokers enabled - False", () => {});

});

describe("A Partial deck ", () => {
  it("Valid GET - UPPERCASE", () => {
    null;
  });
  it("Valid GET - lowercase", () => {
    null;
  });

  it("xInvalid GET - UPPERCASE", () => {
    null;
  });
});

describe("Piles - Adding (no multiple decks)", () => {
  it('Piles - Adding - valid Pile Name', () => {
    null
  });
  it("Piles - Adding - NEW Pile Name", () => {
    null;
  });
  it("xPiles - Adding - invalid  non-comma", () => {
    null;
  });
  it("xPiles - Adding - invalid FALSE cards param", () => {
    null;
  });
});

describe("Piles - Listing (no multiple decks)", () => {
  it("Piles - Listing - valid Pile Name", () => {
    null;
  });
});

describe("Piles - Shuffling (no multiple decks)", () => {
  it('Valid deck_id - valid pile_name', () => {
    null;
  });
  it("Valid deck_id - NEW pile_name", () => {
    null;
  });
  it("xInValid deck_id - valid pile_name", () => {
    null;
  });
  it("xValid deck_id - invalid pile_name", () => {
  null;
});

});

describe("Piles - Drawing", () => {
  it("Piles - Drawing - valid deck_id and pile_name - default ", () => {
    null;
  });
  it("Piles - Drawing - valid deck_id and pile_name - from Bottom ", () => {
    null;
  });
  it("Piles - Drawing - valid deck_id and pile_name - Random ", () => {
    null;
  });
  it("xPiles - Drawing - invalid deck_id and valid pile_name ", () => {
  null;
  });
  it("xPiles - Drawing - valid deck_id and invalid pile_name ", () => {
    null;
  });

});

describe('Returning Cards to the deck', () => {
  it('Drawn Cards - valid deck_id', () => {
    null;
  });   
  it("xDrawn Cards - invalid deck_id", () => {
    null;
  });
  it("From Pile - valid deck_id - valid pile_name", () => {
    null;
  });   
  it("xFrom Pile - valid deck_id - invalid pile_name", () => {
    null;
  });     
  it("Drawn Cards - valid deck_id - valid specific cards", () => {
    null;
  });
  it("xDrawn Cards - valid deck_id - invalid specific cards", () => {
    null;
  });
  it("From Pile - valid deck_id - valid pile_name - valid specific cards", () => {
    null;
  });
  it("xFrom Pile - valid deck_id - valid pile_name - invalid specific cards", () => {
    null;
  });    
})
