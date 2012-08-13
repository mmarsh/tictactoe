function Engine() {
    var self = this;
    
    var generateMoveList = function (board) {
        var moves = [];
        for(prop in board)
            if(board[prop] == '--')
                moves.push(prop);
        return moves;
    }
    
    var generateGameTree = function (board) {
        var moves = generateMoveList(board);
        for(move in moves) {
            var b = new Board(board);
            b.applyMove(moves[move]);
            board.addChild(b);
            generateGameTree(b);
        }
        
        return moves;
    }
    
    var determineOutcomes = function (node, count) {
        count[node.getWinner()]++;
        for(var i = 0 ; i < node.getChildren().length ; i++) {
            determineOutcomes(node.getChildren()[i], count);
        }
    }
    
    var getIndexOfMinMaxOutcome = function(counts, player) {
        var index = -1;
        var best = undefined;
        for(var i = 0 ; i < counts.length ; i++) {
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

        for(var i = 0 ; i < b.getChildren().length ; i++) {
            var count = {
                X: 0,
                O: 0,
                undefined: 0,
                'draw': 0
            };
            determineOutcomes(b.getChildren()[i], count);
            counts.push(count);
        }
        
        return moves[getIndexOfMinMaxOutcome(counts, otherPlayer)];
    }
}