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
        self.A3(board.A3);
        self.A2(board.A2);
        self.A1(board.A1);
        self.B3(board.B3);
        self.B2(board.B2);
        self.B1(board.B1);
        self.C3(board.C3);
        self.C2(board.C2);
        self.C1(board.C1);
    }
}