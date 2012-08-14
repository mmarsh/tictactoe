function UIController(ko, boardVM, ai, board) {
    var self = this;
    
    self.status = ko.observable(playerStr);
    
    var gameOver = false;
    
    var checkForWinner = function () {        
        var winner = board.getWinner();
        switch(winner)
        {
            case DRAW:
              gameOver = true;
              self.status("It's a draw!");
              break;
            case undefined:
              break;
            default:
              gameOver = true;
              self.status(winner + ' has won! F5 to play again');
        }

        return gameOver;
    }
    
    var move = function (pos) {
        board.applyMove(pos);
        boardVM.update(board);
        
        return checkForWinner();
    }
    
    self.click = function (data, event) {
        if(!gameOver) {
            if (move(event.target.id))
                return;
            else
                self.status(aiStr);
            
            setTimeout(function () {
                move(ai.getNextMove(board))
                self.status(playerStr);
            }, 1000);
        }
    };
    
    self.launch = function () {
        boardVM.click = ctlr.click;
        
        ko.applyBindings(self, _METADATA_);
        ko.applyBindings(boardVM, _GAMEBOARD_);
                         
        boardVM.update(board);
    };
}