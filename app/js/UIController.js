function UIController(ko, boardVM, ai, board) {
    var self = this;
    
    self.status = ko.observable(playerStr);
    
    self.click = function (data, event) {
        var pos = event.target.id;
        board.applyMove(pos);
        boardVM.update(board);
        self.status(aiStr);
        
        
        setTimeout(function () {
            var aiPos = ai.getNextMove(board);
            board.applyMove(aiPos);
            boardVM.update(board);
            self.status(playerStr);
        }, 1000);
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