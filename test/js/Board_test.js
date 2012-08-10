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

// - - -
// - - - 
// - - -
test('Given board as shown above, getWinner called, undefined returned', function () {
   equal(sut.getWinner(), undefined); 
});

// X X X
// - - - 
// - - -
test('[Top Row X] Given board as shown above, getWinner called, X returned', function () {
   sut.A3 = X;
   sut.B3 = X;
   sut.C3 = X;
   equal(sut.getWinner(), X); 
});

// - - -
// X X X 
// - - -
test('[Mid Row X] Given board as shown above, getWinner called, X returned', function () {
   sut.A2 = X;
   sut.B2 = X;
   sut.C2 = X;
   equal(sut.getWinner(), X); 
});

// - - -
// - - - 
// X X X
test('[Bot Row X] Given board as shown above, getWinner called, X returned', function () {
   sut.A1 = X;
   sut.B1 = X;
   sut.C1 = X;
   equal(sut.getWinner(), X); 
});

// O O O
// - - - 
// - - -
test('[Top Row O] Given board as shown above, getWinner called, O returned', function () {
   sut.A3 = O;
   sut.B3 = O;
   sut.C3 = O;
   equal(sut.getWinner(), O); 
});

// - - -
// O O O 
// - - -
test('[Mid Row O] Given board as shown above, getWinner called, O returned', function () {
   sut.A2 = O;
   sut.B2 = O;
   sut.C2 = O;
   equal(sut.getWinner(), O); 
});

// - - -
// - - - 
// O O O
test('[Bot Row O] Given board as shown above, getWinner called, O returned', function () {
   sut.A1 = O;
   sut.B1 = O;
   sut.C1 = O;
   equal(sut.getWinner(), O); 
});

// X - -
// X - - 
// X - -
test('[Lef Col X] Given board as shown above, getWinner called, X returned', function () {
   sut.A3 = X;
   sut.A2 = X;
   sut.A1 = X;
   equal(sut.getWinner(), X); 
});

// - X -
// - X - 
// - X -
test('[Mid Col X] Given board as shown above, getWinner called, X returned', function () {
   sut.B3 = X;
   sut.B2 = X;
   sut.B1 = X;
   equal(sut.getWinner(), X); 
});

// - - X
// - - X 
// - - X
test('[Rig Col X] Given board as shown above, getWinner called, X returned', function () {
   sut.C3 = X;
   sut.C2 = X;
   sut.C1 = X;
   equal(sut.getWinner(), X); 
});

// O - -
// O - - 
// O - -
test('[Lef Col O] Given board as shown above, getWinner called, O returned', function () {
   sut.A3 = O;
   sut.A2 = O;
   sut.A1 = O;
   equal(sut.getWinner(), O); 
});

// - O -
// - O - 
// - O -
test('[Mid Col O] Given board as shown above, getWinner called, O returned', function () {
   sut.B3 = O;
   sut.B2 = O;
   sut.B1 = O;
   equal(sut.getWinner(), O); 
});

// - - O
// - - O 
// - - O
test('[Rig Col O] Given board as shown above, getWinner called, O returned', function () {
   sut.C3 = O;
   sut.C2 = O;
   sut.C1 = O;
   equal(sut.getWinner(), O); 
});

// X - -
// - X - 
// - - X
test('[Top Bot X] Given board as shown above, getWinner called, X returned', function () {
   sut.A3 = X;
   sut.B2 = X;
   sut.C1 = X;
   equal(sut.getWinner(), X); 
});

// - - X
// - X - 
// X - -
test('[Bot Top X] Given board as shown above, getWinner called, X returned', function () {
   sut.A1 = X;
   sut.B2 = X;
   sut.C3 = X;
   equal(sut.getWinner(), X); 
});

// O - -
// - O - 
// - - O
test('[Top Bot O] Given board as shown above, getWinner called, O returned', function () {
   sut.A3 = O;
   sut.B2 = O;
   sut.C1 = O;
   equal(sut.getWinner(), O); 
});

// - - O
// - O - 
// O - -
test('[Bot Top O] Given board as shown above, getWinner called, O returned', function () {
   sut.A1 = O;
   sut.B2 = O;
   sut.C3 = O;
   equal(sut.getWinner(), O); 
});