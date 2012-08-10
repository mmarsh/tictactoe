var O = 'O';
var X = 'X';
var aiStr = "O is thinking...";
var playerStr = "X is thinking...(that's you!)";

var engine = new Engine();
var board = new Board();
var boardVM = new BoardVM(ko);
var ctlr = new UIController(ko, boardVM, engine, board);

document.body.className = "";

ctlr.launch();
