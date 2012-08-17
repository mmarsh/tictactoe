//////////////////////////
//////////////////////////

// <Digraph>

//////////////////////////
//////////////////////////

function Digraph() {
    var self = this;
    
    var _nodes = [];
    var _edges = [];
    
    var hasAnyIncomingEdge = function (node) {
        for (var i = 0 ; i < _edges.length ; i++) {
            var currentEdge = _edges[i];
            if (currentEdge[1] == node)
                return true;
        }
        
        return false;
    }
    
    var getNodesWithNoIncomingEdges = function () {
        var nodes = [];
        
        for (var i = 0 ; i < _nodes.length ; i++) {
            var currentNode = _nodes[i];
            if (!hasAnyIncomingEdge(currentNode))
                nodes.push(currentNode);
        }
        
        return nodes;
    };
    
    self.add = function (id, targets) {
        _nodes.push(id);
        for (var i = 0 ; i < targets.length ; i++) {
            _edges.push([id, targets[i]]);
        }
    };

    var removeEdgesFrom = function (node) {
        var edges = [];
        for(var i = 0 ; i < _edges.length ; i++) {
            if(_edges[i][0] != node)
                edges.push(_edges[i]);
        }
        
        _edges = edges;
    }
    
    self.topologicalSort = function () {
        var L = [];
        var S = getNodesWithNoIncomingEdges();
        
        while (S.length) {
            var n = S.shift();
            L.push(n);
            removeEdgesFrom(n);
            var e = getNodesWithNoIncomingEdges();
            for(var i = 0 ; i < e.length ; i++) {
                if (L.indexOf(e[i]) < 0 && S.indexOf(e[i]) < 0)
                    S.push(e[i]);
            }    
        }
        
        if (_edges.length > 0)
            throw 'cyclic graph';
             
        return L;
    };
}

//////////////////////////
//////////////////////////

// </Digraph>

//////////////////////////
//////////////////////////



function loadScript(url, done) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    
    script.type = 'text/javascript';
    script.src = url;
    
    script.onload = done;
    
    head.appendChild(script);
}

function createObject(id) {
    var args = [];
    for(var j = 0 ; j < map_objectToArgs[id].length ; j++) {
        args.push(createdObjs[map_objectToArgs[id][j]]);
    }

    if(map_objectToGlobality[id])
        createdObjs[id] = window[id];
    else
        createdObjs[id] = window[id].apply(null, args);
}

function synchronouslyLoadSpringXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "spring.xml", false);
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send("");
    
    return xmlhttp.responseXML;
}

function getLoadOrder(map) {
    var digraph = new Digraph();
    for(key in map) {
        digraph.add(key, map[key]);
    }

    return digraph.topologicalSort();
}

function load() {
    map_objectToThingsUsingIt = {};
    map_objectToType = {};
    map_objectToArgs = {};
    map_objectToGlobality = {};
    createdObjs = {};
 
    var xmlDoc = synchronouslyLoadSpringXML();
    var objects = xmlDoc.getElementsByTagName("object");
    
    for(var i = 0 ; i < objects.length ; i++) {
        var object = objects[i];
        var name = object.getAttribute('name');
        var launchMethod = object.getAttribute('launch-method');
        var type = object.getAttribute('type');
        var global = object.getAttribute('global');
        
        if(launchMethod != null)
            launch = {object: name, method: launchMethod };
            
        map_objectToThingsUsingIt[name] = [];
        map_objectToType[name] = type;
        
        map_objectToGlobality[name] = global != null ? global : false;
    }
    
    for(var i = 0 ; i < objects.length ; i++) {
        var object = objects[i];
        var name = object.getAttribute('name');
        var args = object.getElementsByTagName("constructor-arg");
        
        map_objectToArgs[name] = [];
        
        for(var j = 0 ; j < args.length ; j++){
            var ref = args[j].getAttribute("ref");
            map_objectToThingsUsingIt[ref].push(name);
            map_objectToArgs[name].push(ref);
        }
    }

    var ids = getLoadOrder(map_objectToThingsUsingIt);
    
    loadScriptList(ids, function () {
        createdObjs[launch.object][launch.method]();
    });
}

function loadScriptList(fileList, done) {
    if(fileList.length) {
        var id = fileList.shift();
        loadScript(map_objectToType[id]+'.js', function () {
            createObject(id);
            loadScriptList(fileList, done);
        });
    }
    else
        done();
}

load();