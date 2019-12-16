import chai from 'chai';
const expect = chai.expect;
import Game from '../src/game';
import Player from '../src/player';
import Turn from '../src/turn';
import Round from '../src/round';

import data from '../src/data.js';

let game1, surveys1, answers1, playerT1, playerT2, turn1, round1;



describe('Game Class', function() {
  beforeEach(() => {
    surveys1 = { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' };
    answers1 = { answer: 'Alarm Clock', respondents: 34, surveyId: 3 };
    playerT1 = new Player('Steve');
    playerT2 = new Player('Jeff');
    turn1 = new Turn(playerT1, answers1);
    round1 = new Round(surveys1, playerT1, playerT2, 1);

    game1 = new Game(surveys1, answers1, playerT1, playerT2, turn1, round1);
  });

  it('should hold the surveys data', function() {
    expect(game1.surveys).to.deep.equal({ id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' });
  });

  it('should hold the answers data', function() {
    expect(game1.answers).to.deep.equal({ answer: 'Alarm Clock', respondents: 34, surveyId: 3 });
  });

  it('should hold player1 name', function() {
    expect(game1.player1.name).to.equal('Steve');
  });

  it('should hold player1 score', function() {
    expect(game1.player1.score).to.equal(0);
  });



});
