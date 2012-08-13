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

test('New BoardVM, , has ko observable field A1', function () {
    equal(sut.A1, mockObservable);
});

test('New BoardVM, , has ko observable field A2', function () {
    equal(sut.A2, mockObservable);
});

test('New BoardVM, , has ko observable field A3', function () {
    equal(sut.A3, mockObservable);
});

test('New BoardVM, , has ko observable field B1', function () {
    equal(sut.B1, mockObservable);
});

test('New BoardVM, , has ko observable field B2', function () {
    equal(sut.B2, mockObservable);
});

test('New BoardVM, , has ko observable field B3', function () {
    equal(sut.B3, mockObservable);
});

test('New BoardVM, , has ko observable field C1', function () {
    equal(sut.C1, mockObservable);
});

test('New BoardVM, , has ko observable field C2', function () {
    equal(sut.C2, mockObservable);
});

test('New BoardVM, , has ko observable field C3', function () {
    equal(sut.C3, mockObservable);
});