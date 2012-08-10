function countCallbacks() { __cc++; }

function catchNParams() {
    for(arg in arguments)
        __params.push(arguments[arg]);
}

module('UIController', {
    setup: function () {
        __cc = 0;
        __params = [];
        
        ko = {
            applyBindings: function() {}
        };
        
        boardVM = {
            
        };
        
        sut = new UIController(ko, boardVM);
    },
    teardown: function () {}
});



