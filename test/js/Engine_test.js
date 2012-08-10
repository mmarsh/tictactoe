module('Engine', {
    setup: function () {
        sut = new Engine();
    },
    teardown: function () {}
});

test('New Engine, , not null', function () {
    notEqual(sut, null);
});