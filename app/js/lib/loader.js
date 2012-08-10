var xmlhttp = new XMLHttpRequest();;

function loadScript(url, done) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    
    script.type = 'text/javascript';
    script.src = url;
    
    script.onload = function() {
        //if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            done();
    }
    
    
    
    head.appendChild(script);
}

function loadFile(url, done) {
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            done(xmlhttp.responseText);
    }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function loadScriptList(fileList, done) {
    if(fileList.length)
        loadScript(fileList.shift(), function () {
            loadScriptList(fileList, done);
        });
    else
        done();
}

// ---------

loadFile('../../cfg/dependencies.txt', function (data) {
    loadScriptList(data.split('\n'), function () { });
});