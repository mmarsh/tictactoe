

function Board(seedBoard) {
    var self = this;
        
    var children = [];    
        
    if(seedBoard) {
        self.A1 = seedBoard.A1;
        self.A2 = seedBoard.A2;
        self.A3 = seedBoard.A3;
        self.B1 = seedBoard.B1;
        self.B2 = seedBoard.B2;
        self.B3 = seedBoard.B3;
        self.C1 = seedBoard.C1;
        self.C2 = seedBoard.C2;
        self.C3 = seedBoard.C3;
    } else {
        self.A1 = '--';
        self.A2 = '--';
        self.A3 = '--';
        self.B1 = '--';
        self.B2 = '--';
        self.B3 = '--';
        self.C1 = '--';
        self.C2 = '--';
        self.C3 = '--';
    }
    
    self.applyMove = function(pos) {
        self[pos.toString()] = self.getCurrentPlayer();
    }
    
    self.getCurrentPlayer = function() {
        var XCount = 0;
        var OCount = 0;
        
        for(prop in self) {
            if(self[prop] == X)
                XCount++;
            else if(self[prop] == O)
                OCount++;
        }
        
        if(XCount > OCount)
            return O;
        else
            return X;
    }
    
    self.addChild = function (child){ children.push(child); }
    self.getChildren = function () { return children; }
    
    var evaluateRow = function (row, player) {
        var retVal = false;
            
        if(self['A'+row] == player &&
           self['B'+row] == player &&
           self['C'+row] == player) {
            retVal = true;
        }
       
        return retVal;

    }
    
    var evaluateColumn = function (column, player) {
        var retVal = false;
            
        if(self[column+'3'] == player &&
           self[column+'2'] == player &&
           self[column+'1'] == player) {
            retVal = true;
        }
       
        return retVal;

    }
    
    var evaluateRows = function (player){
        return (evaluateRow('3', player) || 
                evaluateRow('2', player) || 
                evaluateRow('1', player));
    }
    
    var evaluateColumns = function (player) {
        return (evaluateColumn('A', player) || 
                evaluateColumn('B', player) || 
                evaluateColumn('C', player));
    }
    
    var evaluateDiag1 = function (player) {
        var retVal = false;
            
        if(self['A3'] == player &&
           self['B2'] == player &&
           self['C1'] == player) {
            retVal = true;
        }
       
        return retVal;
    }
    
    var evaluateDiag2 = function (player) {
        var retVal = false;
            
        if(self['A1'] == player &&
           self['B2'] == player &&
           self['C3'] == player) {
            retVal = true;
        }
       
        return retVal;
    }
    
    var evaluateDiagonals = function (player) {
        return (evaluateDiag1(player) || 
                evaluateDiag2(player));
    }
    
    var allPossibleMovesMade = function () {
        return (self['A1'] != '--' &&
                self['A2'] != '--' &&
                self['A3'] != '--' &&
                self['B1'] != '--' &&
                self['B2'] != '--' &&
                self['B3'] != '--' &&
                self['C1'] != '--' &&
                self['C2'] != '--' &&
                self['C3'] != '--')
    }
    
    self.getWinner = function () {
        var winner = undefined;
        
        if(evaluateRows(X) || evaluateColumns(X) || evaluateDiagonals(X))
            winner = X;
        else if(evaluateRows(O) || evaluateColumns(O) || evaluateDiagonals(O))
            winner = O;
            
        if ( winner == undefined && allPossibleMovesMade() )
            winner = 'draw';
        
        return winner;
    }
}

