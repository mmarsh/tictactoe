function BoardVM(ko) {
    var self = this;

    self.A3 = ko.observable('');
    self.B3 = ko.observable('');
    self.C3 = ko.observable('');
    self.A2 = ko.observable('');
    self.B2 = ko.observable('');
    self.C2 = ko.observable('');
    self.A1 = ko.observable('');
    self.B1 = ko.observable('');
    self.C1 = ko.observable('');
        
    self.update = function(board) {
        self.A3(board.squares[0][2]);
        self.A2(board.squares[0][1]);
        self.A1(board.squares[0][0]);
        self.B3(board.squares[1][2]);
        self.B2(board.squares[1][1]);
        self.B1(board.squares[1][0]);
        self.C3(board.squares[2][2]);
        self.C2(board.squares[2][1]);
        self.C1(board.squares[2][0]);
    }
}