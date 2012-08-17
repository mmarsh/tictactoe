Tic Tac Toe
====================

js implementation of a basic [game tree](http://en.wikipedia.org/wiki/Game_tree) for 
tic tac toe, as well as a [minimax algorithm](http://en.wikipedia.org/wiki/Minimax) to 
select the right move for the ai to perform.

Also contains a simple ui as a proof of concept.

Startup
--------------------
Uses a homebrew [spring-style ioc container]{http://www.springframework.net/doc-latest/reference/html/objects.html}
to define dependencies and load order.
This should be separated out into it's own project soon.

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
