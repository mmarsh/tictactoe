module('Board', {
    setup: function () {
        sut = new Board();
        X = 'X';
        O = 'O';
    },
    teardown: function () {}
});

test('New Board, , not null', function () {
    notEqual(sut, null);
});

test('New Board, , has method applyMove', function () {
    equal(typeof sut.applyMove, 'function');
});

test('New Board, applyMove called with A1, correct field populated with correct value', function () {
    sut.applyMove('A1');
    equal(sut.squares[0][0], X);
});

test('New Board, applyMove called with A2, correct field populated with correct value', function () {
    sut.applyMove('A2');
    equal(sut.squares[0][1], X);
});

test('New Board, applyMove called with A3, correct field populated with correct value', function () {
    sut.applyMove('A3');
    equal(sut.squares[0][2], X);
});

test('New Board, applyMove called with B1, correct field populated with correct value', function () {
    sut.applyMove('B1');
    equal(sut.squares[1][0], X);
});

test('New Board, applyMove called with B2, correct field populated with correct value', function () {
    sut.applyMove('B2');
    equal(sut.squares[1][1], X);
});

test('New Board, applyMove called with B3, correct field populated with correct value', function () {
    sut.applyMove('B3');
    equal(sut.squares[1][2], X);
});

test('New Board, applyMove called with C1, correct field populated with correct value', function () {
    sut.applyMove('C1');
    equal(sut.squares[2][0], X);
});

test('New Board, applyMove called with C2, correct field populated with correct value', function () {
    sut.applyMove('C2');
    equal(sut.squares[2][1], X);
});

test('New Board, applyMove called with C3, correct field populated with correct value', function () {
    sut.applyMove('C3');
    equal(sut.squares[2][2], X);
});

// - - -
// - X O 
// - - -
test('Seedboard as shown above, new board constructed with the seedboard, new board has correct squares', function () {
    
    sut.applyMove('B2');
    sut.applyMove('C2');
    
    var b = new Board(sut);
    
    equal(b.squares[1][1], X);
    equal(b.squares[2][1], O);
});

// - - -
// - - - 
// - - -
// test('Given board as shown above, getWinner called, undefined returned', function () {
   // equal(sut.getWinner(), undefined); 
// });

// X X X
// - O - 
// O - O
test('[Top Row X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('A3');
   sut.applyMove('A1');
   
   sut.applyMove('B3');
   sut.applyMove('B2');
   
   sut.applyMove('C3');
   sut.applyMove('C1');
   
   equal(sut.getWinner(), X); 
});

// - O -
// X X X 
// O - O
test('[Mid Row X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('A2');
   sut.applyMove('A1');
   
   sut.applyMove('B2');
   sut.applyMove('B3');
   
   sut.applyMove('C2');
   sut.applyMove('C1');
   
   equal(sut.getWinner(), X); 
});

// - O -
// O - O 
// X X X
test('[Bot Row X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('A1');
   sut.applyMove('A2');
   
   sut.applyMove('B1');
   sut.applyMove('B3');
   
   sut.applyMove('C1');
   sut.applyMove('C2');
   
   equal(sut.getWinner(), X); 
});

// O O O
// - X - 
// X - X
test('[Top Row O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A1');
   sut.applyMove('A3');
   
   sut.applyMove('B2');
   sut.applyMove('B3');
   
   sut.applyMove('C1');
   sut.applyMove('C3');
   
   equal(sut.getWinner(), O); 
});

// - X -
// O O O 
// X - X
test('[Mid Row O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A1');
   sut.applyMove('A2');
   
   sut.applyMove('B3');
   sut.applyMove('B2');
   
   sut.applyMove('C1');
   sut.applyMove('C2');
   
   equal(sut.getWinner(), O); 
});

// - X -
// X - X 
// O O O
test('[Bot Row O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A2');
   sut.applyMove('A1');
   
   sut.applyMove('B3');
   sut.applyMove('B1');
   
   sut.applyMove('C2');
   sut.applyMove('C1');
   
   equal(sut.getWinner(), O); 
});

// X O -
// X - O 
// X O -
test('[Lef Col X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('A1');
   sut.applyMove('B1');
   
   sut.applyMove('A2');
   sut.applyMove('C2');
   
   sut.applyMove('A3');
   sut.applyMove('B3');
   
   equal(sut.getWinner(), X); 
});

// O X -
// - X O 
// O X -
test('[Mid Col X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('B1');
   sut.applyMove('A1');
   
   sut.applyMove('B2');
   sut.applyMove('A3');
   
   sut.applyMove('B3');
   sut.applyMove('C2');
   equal(sut.getWinner(), X); 
});

// O - X
// - O X 
// O - X
test('[Rig Col X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('C1');
   sut.applyMove('A1');
   
   sut.applyMove('C2');
   sut.applyMove('B2');
   
   sut.applyMove('C3');
   sut.applyMove('A3');
   
   equal(sut.getWinner(), X); 
});

// O X -
// O - X 
// O X -
test('[Lef Col O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('B1');
   sut.applyMove('A1');
   
   sut.applyMove('C2');
   sut.applyMove('A2');
   
   sut.applyMove('B3');
   sut.applyMove('A3');
   
   equal(sut.getWinner(), O); 
});

// X O -
// - O X 
// X O -
test('[Mid Col O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A1');
   sut.applyMove('B1');
      
   sut.applyMove('A3');
   sut.applyMove('B2');
      
   sut.applyMove('C2');
   sut.applyMove('B3');
      
   equal(sut.getWinner(), O); 
});

// X - O
// - X O 
// X - O
test('[Rig Col O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A1');
   sut.applyMove('C1');
      
   sut.applyMove('B2');
   sut.applyMove('C2');
      
   sut.applyMove('A3');
   sut.applyMove('C3');
   
   equal(sut.getWinner(), O); 
});

// X - -
// - X O 
// O O X
test('[Top Bot X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('A3');
   sut.applyMove('A1');
      
   sut.applyMove('B2');
   sut.applyMove('B1');
      
   sut.applyMove('C1');
   sut.applyMove('C2');
   
   equal(sut.getWinner(), X); 
});

// O - X
// - X - 
// X O O
test('[Bot Top X] Given board as shown above, getWinner called, X returned', function () {
   sut.applyMove('A1');
   sut.applyMove('A3');
      
   sut.applyMove('B2');
   sut.applyMove('B1');
      
   sut.applyMove('C3');
   sut.applyMove('C1');
   
   equal(sut.getWinner(), X); 
});

// O - -
// - O X 
// X X O
test('[Top Bot O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A1');
   sut.applyMove('A3');
   
   sut.applyMove('B1');   
   sut.applyMove('B2');
   
   sut.applyMove('C2');   
   sut.applyMove('C1');
   
   equal(sut.getWinner(), O); 
});

// X - O
// - O - 
// O X X
test('[Bot Top O] Given board as shown above, getWinner called, O returned', function () {
   sut.applyMove('A3');
   sut.applyMove('A1');
   
   sut.applyMove('B1');   
   sut.applyMove('B2');
   
   sut.applyMove('C1');   
   sut.applyMove('C3');
   
   equal(sut.getWinner(), O); 
});

// - - -
// - X - 
// - - -
test('[No winner yet] Given board as shown above, getWinner called, undefined returned', function () {
   sut.applyMove('B2');
   
   equal(sut.getWinner(), undefined); 
});

// X O X
// X X O 
// O X O
test('[Draw] Given board as shown above, getWinner called, draw returned', function () {
   sut.applyMove('A3');
   sut.applyMove('B3');
   
   sut.applyMove('A2');   
   sut.applyMove('A1');
   
   sut.applyMove('B2');   
   sut.applyMove('C2');
   
   sut.applyMove('B1');   
   sut.applyMove('C1');
   
   sut.applyMove('C3');   
   
   equal(sut.getWinner(), 'draw'); 
});