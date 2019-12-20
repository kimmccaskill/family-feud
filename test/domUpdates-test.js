import spies from "chai-spies";
import chai from "chai";
const expect = chai.expect;
import Game from "../src/game.js";
import data from "../src/data.js";
import domUpdates from "../src/domUpdates.js";
chai.use(spies);


describe("domUpdates", () => {
  let game;
  beforeEach(() => {
    game = new Game(data)
  })
  it.only('should update the DOM with a new question', function () {
    chai.spy.on(domUpdates, 'displayNewQuestion', () => true)
    game.loadSurvey();
    expect(domUpdates.displayNewQuestion()).to.equal(true)
  })
})


