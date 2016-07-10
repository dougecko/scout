var stuff = function (a) {
    return a();
};

var constructButton = function (foo) {
    return $("<button/>", {
        id: foo
    }).append($("<div class='icon-txt'>Bob</div>")).on("click", stuff(function (bar) {
        return bar;
    }(foo)));
};

var constructButtonA = constructButton("Stuff");
var constructButtonB = constructButton("Nonsense");