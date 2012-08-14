var O = 'O';
var X = 'X';
var DRAW = 'draw';
var aiStr = "O is thinking...";
var playerStr = "X is thinking...(that's you!)";

var _METADATA_ = document.getElementById('metaData')
var _GAMEBOARD_ = document.getElementById('gameBoard')

var engine = new Engine();
var board = new Board();
var boardVM = new BoardVM(ko);
var ctlr = new UIController(ko, boardVM, engine, board);

document.body.className = "";

ctlr.launch();
