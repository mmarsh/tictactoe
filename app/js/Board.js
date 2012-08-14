function Board(seedBoard) {
    var self = this;
        
    // Should get this out of here...
    var children = [];    
    self.addChild = function (child){ children.push(child); }
    self.getChildren = function () { return children; }
    //--------
    
    var lut = {'A':0,
               'B':1,
               'C':2};
                      
    var enumerate = function(step) {
        for (var i = 0 ; i < 3 ; i++ )
            for (var j = 0 ; j < 3 ; j++ ) 
                step(self.squares[i][j]);
    }
    
    self.squares = [new Array(3), new Array(3), new Array(3)];
    
    self.applyMove = function(pos) {
        self.squares[lut[pos[0]]][parseInt(pos[1])-1] = self.getCurrentPlayer();        
    }
    
    self.getCurrentPlayer = function() {
        var xC = 0;
        var oC = 0;
        
        enumerate(function (square) {
            if (square == X) xC++;
            else if (square == O) oC++;
        });
        
        return xC > oC ? O : X;
    }
     
    var evaluateRows = function (player){    
        for (var i = 0 ; i < 3 ; i++ ) {
            if ( self.squares[0][i] == player &&
                 self.squares[1][i] == player &&
                 self.squares[2][i] == player)
                    return true;
        }
        
        return false;
    }
    
    var evaluateColumns = function (player) {
        for (var i = 0 ; i < 3 ; i++ ) {
            if ( self.squares[i][0] == player &&
                 self.squares[i][1] == player &&
                 self.squares[i][2] == player)
                    return true;
        }
        
        return false;
    }
    
    var evaluateDiagonals = function (player) {
        if ( self.squares[0][0] == player &&
             self.squares[1][1] == player &&
             self.squares[2][2] == player)
                return true;
                
        if ( self.squares[0][2] == player &&
             self.squares[1][1] == player &&
             self.squares[2][0] == player)
                return true;
                
        return false;
    }
    
    var allPossibleMovesMade = function () {
        var allMovesMade = true;
        
        enumerate(function (square) {
            if(square == undefined)
                allMovesMade = false;
        });
        
        return allMovesMade;
    }
    
    self.getWinner = function () {
        if (evaluateRows(X) || evaluateColumns(X) || evaluateDiagonals(X))
            return X;
        if (evaluateRows(O) || evaluateColumns(O) || evaluateDiagonals(O))
            return O;
        if (allPossibleMovesMade() )
            return DRAW;
            
        return undefined;
    }
    
    
    {   // Constructor
        if (seedBoard)
            for (var i = 0 ; i < 3 ; i++ )
                for (var j = 0 ; j < 3 ; j++ ) 
                    self.squares[i][j] = seedBoard.squares[i][j];
    }
}

