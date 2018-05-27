var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mylocation = /** @class */ (function () {
    function Mylocation(title, city, zip, address, teaserimg, creationDate) {
        this.title = title;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.teaserimg = teaserimg;
        this.creationDate = creationDate;
    }
    Mylocation.prototype.render = function () {
        document.querySelector('.hugo').innerHTML += "\n\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <h4>Places: <br>" + this.title + "</h4>\n                </div>\n                <img class=\"card-img-top img-responsive\" src=\"img/" + this.teaserimg + "\" alt=\"" + this.title + "\">\n                <div class=\"card-body\">\n                    <p>" + this.address + ", " + this.zip + " " + this.city + "</p>\n                    <hr><p><small>Created: " + this.creationDate + "</small></p>\n                </div>\n            </div>\n        </div>";
    };
    ;
    return Mylocation;
}());
;
// creating 2 Location objects 
var church = new Mylocation('St. Charles Church', 'Vienna', 1010, 'Karlsplatz 1', "charles-church.jpg", new Date('2017-02-08 08:30'));
var zoo = new Mylocation('Zoo Schönbrunn', 'Vienna', 1130, 'Maxingstraße 13b', 'zoo-vienna.jpg', new Date('2018-04-08 10:30'));
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(title, city, zip, address, teaserimg, creationDate, tel, kindof, site) {
        var _this = _super.call(this, title, city, zip, address, teaserimg, creationDate) || this;
        _this.tel = tel;
        _this.kindof = kindof;
        _this.site = site;
        _this.tel = tel,
            _this.kindof = kindof,
            _this.site = site;
        return _this;
    }
    ;
    Restaurants.prototype.render = function () {
        document.querySelector('.hugo').innerHTML += "\n\t\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t            <div class=\"card\">\n\t\t                <div class=\"card-header text-center\">\n\t\t                    <h4>Restaurants:<br> " + this.title + "</h4>\n\t\t                </div>\n\t\t                <img class=\"card-img-top img-responsive\" src=\"img/" + this.teaserimg + "\" alt=\"" + this.title + "\">\n\t\t                <div class=\"card-body\">\n\t\t                    <p>" + this.address + ", " + this.zip + " " + this.city + "</p>\n\t\t                    <p>" + this.tel + "</p>\n\t\t                    <p>" + this.site + "</p>\n\t\t                    <p>Type: " + this.kindof + "</p>\n\t\t                    <hr><p><small>Created: " + this.creationDate + "</small></p>\n\t\t                </div>\n\t\t            </div>\n\t\t        </div>";
    };
    ;
    return Restaurants;
}(Mylocation));
;
// creating 2 Restaurant objects 
var thai = new Restaurants('Lemon Leaf Thai Restaurant', 'Vienna', 1050, 'Kettenbrückengasse 19', 'lemon-leaf.jpg', new Date('2018-05-04 18:00'), '+43(1)5812308', 'thai', 'http://www.lemonleaf.at');
var sixta = new Restaurants('SIXTA', 'Vienna', 1050, 'Schönbrunner Straße 21', 'sixta.jpg', new Date('2018-01-04 17:00'), '+43 1 58 528 56 / +43 1 58 528 56', 'wienerisch', 'http://www.sixta-restaurant.at/');
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(title, city, zip, address, teaserimg, creationDate, eventDate, eventTime, price) {
        var _this = _super.call(this, title, city, zip, address, teaserimg, creationDate) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        _this.eventDate = eventDate,
            _this.eventTime = eventTime,
            _this.price = price;
        return _this;
    }
    ;
    Events.prototype.render = function () {
        document.querySelector('.hugo').innerHTML += "\n\t\t\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t            <div class=\"card\">\n\t\t\t                <div class=\"card-header text-center\">\n\t\t\t                   <h4>Events: <br>" + this.title + "</h4>\n\t\t\t                </div>\n\t\t\t                <img class=\"card-img-top img-responsive\" src=\"img/" + this.teaserimg + "\" alt=\"" + this.title + "\">\n\t\t\t                <div class=\"card-body\">\n\t\t\t                    <p>" + this.address + ", " + this.zip + " " + this.city + "</p>\n\t\t\t                    <p>" + this.eventDate + " " + this.eventTime + "</p>\n\t\t\t                    <p>" + this.price + "</p>\n\t\t\t                    <hr><p><small>Created: " + this.creationDate + "</small></p>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t        </div>";
    };
    ;
    return Events;
}(Mylocation));
;
// creating 2 Event objects 
var kris = new Events('Kris Kristofferson', 'Vienna', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'kris-kristofferson.jpg', new Date('2017-12-18 19:00'), 'Fr., 15.06.2018', '20:00', '58,50 EUR');
var lenny = new Events('Lenny Kravitz', 'Vienna', 1150, 'Wiener Stadthalle, Halle D, Roland Rainer Platz 1', 'lenny-kravitz.jpg', new Date('2017-12-14 13:00'), 'Sat, 09.06.2018', '19:30', '€ 47,80');
var blogs = [church, zoo, thai, sixta, kris, lenny]; // array of all blog elements
function displayBlog(array) {
    array.forEach(function (blog) {
        blog.render();
    });
}
;
displayBlog(blogs); // call function for displaying
