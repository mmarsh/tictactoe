Tic Tac Toe
====================

js implementation of a basic [game tree](http://en.wikipedia.org/wiki/Game_tree) for 
tic tac toe, as well as a [minimax algorithm](http://en.wikipedia.org/wiki/Minimax) to 
select the right move for the ai to perform.

Also contains a simple ui as a proof of concept.

Startup
--------------------
Uses a synchronous script loader (found in loader.js) which digs into 
cfg\dependencies.txt to load the js files. The last file in the txt file,
app.js, initializes the state of the app and shows the ui.

Been kicking around the idea of a simple spring type loader for js files,
hopefully this will replace loader.js

Deployment
--------------------
Just dump the contents of the app directory in a basic web host.
I used [mongoose](http://code.google.com/p/mongoose/) when developing

Unit Tests
--------------------
Unit tests can run by opening test/index.html (no host needed, file system works fine).
I used QUnit and aggregated all the tests into a single page, differentiating by module name.

TODO
--------------------
=======
+  Move tree/node structure out of Board object. Mixing domain models.
+  Test files are woefully lacking. Didn't really TDD much 
besides the board win state logic.
