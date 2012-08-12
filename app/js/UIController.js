function UIController(ko, boardVM, ai, board) {
    var self = this;
    
    self.status = ko.observable(playerStr);
    
    var gameOver = false;
    
    var checkForWinner = function () {
        var winner = board.getWinner();
        if (winner != undefined && winner != 'draw') {
            gameOver = true;
            self.status(winner + ' has won! F5 to play again');
        }
            
       else if ( winner == 'draw' ) {
            gameOver = true;
            self.status("It's a draw!");
        }
        
        return gameOver;
    }
    
    self.click = function (data, event) {
        if(!gameOver) {
            var pos = event.target.id;
            board.applyMove(pos);
            boardVM.update(board);
            self.status(aiStr);
            if(checkForWinner())
                return;
            
            setTimeout(function () {
                var aiPos = ai.getNextMove(board);
                board.applyMove(aiPos);
                boardVM.update(board);
                self.status(playerStr);
                checkForWinner();
            }, 1000);
        }
    };
    
    self.launch = function () {
        boardVM.click = ctlr.click;
        
        ko.applyBindings(self, 
                         document.getElementById('metaData'));
        
        ko.applyBindings(boardVM, 
                         document.getElementById('gameBoard'));
                         
        boardVM.update(board);
    };
}