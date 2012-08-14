function Engine() {
    var self = this;
    
    var lut = {0:'A',
               1:'B',
               2:'C'};
    
    var generateMoveList = function (board) {
        var moves = [];
        for (var i = 0 ; i < 3 ; i++ ) {
            for (var j = 0 ; j < 3 ; j++ ) {
                if (board.squares[i][j] == undefined) {
                    moves.push(lut[i]+(j+1));
                }
            }
        }
        
        return moves;
    }
    
    var generateGameTree = function (board) {
        var moves = generateMoveList(board);
        for (move in moves) {
            var b = new Board(board);
            b.applyMove(moves[move]);
            board.addChild(b);
            generateGameTree(b);
        }
        
        return moves;
    }
    
    var determineOutcomes = function (node, count) {
        count[node.getWinner()]++;
        for (var i = 0 ; i < node.getChildren().length ; i++) {
            determineOutcomes(node.getChildren()[i], count);
        }
    }
    
    var getIndexOfMinMaxOutcome = function(counts, player) {
        var index = -1;
        var best = undefined;
        for (var i = 0 ; i < counts.length ; i++) {
            if(best == undefined || counts[i][player] < best) {
                best = counts[i][player];
                index = i;
            }
        }
        
        return index;
    }
    
    self.getNextMove = function (board) {
        var b = new Board(board);
        var moves = generateGameTree(b);
        var currentPlayer = board.getCurrentPlayer();
        var otherPlayer = currentPlayer == X ? O : X;
        
        var counts = [];

        for (var i = 0 ; i < b.getChildren().length ; i++) {
            var count = {
                X: 0,
                O: 0,
                undefined: 0,
                DRAW: 0
            };
            determineOutcomes(b.getChildren()[i], count);
            counts.push(count);
        }
        
        return moves[getIndexOfMinMaxOutcome(counts, otherPlayer)];
    }
}