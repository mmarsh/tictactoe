function catchNParams() {
    for(arg in arguments)
        __params.push(arguments[arg]);
}

module('BoardVM', {
    setup: function () {
        __params = [];
    
        mockObservable = {
        
        };
        
        ko = {
            observable: function () { return mockObservable; }
        };
        
        sut = new BoardVM(ko, catchNParams);
    },
    teardown: function () {}
});

test('New BoardVM, , not null', function () {
    notEqual(sut, null);
});

test('New BoardVM, , has ko observable field A3', function () {
    equal(sut.A3, mockObservable);
});