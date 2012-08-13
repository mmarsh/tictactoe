Tic Tac Toe
====================

js implementation of a basic game tree for 
tic tac toe, as well as a min max algorithm to 
select the right move for the ai to perform.

Also contains a simple ui as a proof of concept

Startup
--------------------
Uses a synchronous script loader (found in loader.js) which digs into 
cfg\dependencies.txt to load the js files. The last file in the txt file,
app.js, initializes the state of the app and shows the ui.

#### Been kicking around the idea of a simple js spring type loader,
#### hopefully this will replace loader.js

Deployment
--------------------
Just dump the contents of the app directory in a basic web host.
I used [mongoose](http://code.google.com/p/mongoose/) when developing

TODO
--------------------
+  Optimize and refactor. There's junk code in there for sure
+  Test files are woefully lacking. Didn't really TDD much 
besides the board win state logic. Need to remedy that.

