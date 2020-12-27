//
// A possible data shaping demo for Uno game companion app...
//

const data = [
    {
        gameNumber: 1
        , turns: [
            {
                turnNumber: 1
                , beginningHandSize: 5
                , action: 'played card'
                , endingHandSize: 4
            }
        ]
    }
];

//
// Hmm, maybe too many details... Start with the end in mind...
//
// In other words, what 'stats' do we want ? ? ?
//
// Maybe, initially, just how many turns a game takes... Hmm...
// 
// We can evolve it in the future ! ! !
//

const data2 = [     // Array of games
    {
        gameNumber: 1
        , myTurns: [    // Maybe we just data collect my turns ? ? ?
            'play card'
            , 'draw card'
            , 'play card'
            , 'play card'
            , 'play card'
            , 'uno'
            , 'win'     // Simple scenario, uno, then play card, win, on next turn
        ]
    }
    , {
        gameNumber: 2
        , myTurns: [    // Maybe we just data collect my turns ? ? ?
            'play card'
            , 'draw card'
            , 'play card'
            , 'play card'
            , 'play card'
            , 'uno'         // Got to uno, but didn't win, had more turns, and somebody else won since my last turn IS NOT 'win'
            , 'play card'
            , 'play card'
            , 'loss'        // Hmm, probably need some UI to end the game, so can easily include this, hmm, but is it a turn ? ? ?
        ]
    }
];


// How many games have I played?
const gamesPlayed = data2.length;
console.log(gamesPlayed);

// How many games did I win?
const gamesWon = data2.reduce(
    (acc, x) => x.myTurns.includes('win') ? acc + 1 : acc
    , 0
);
console.log(gamesWon);

// How many games did I lose?
const gamesLost = gamesPlayed - gamesWon;
console.log(gamesLost);

const gamesLost2 = data2.reduce(
    (acc, x) => x.myTurns.includes('loss') ? acc + 1 : acc
    , 0
);
console.log(gamesLost2);
