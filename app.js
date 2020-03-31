// Initialisation du modèle
titles = Backbone.Model.extend();
var title = new titles({
  h1titel: 'Find your ideal hotel and compare prices from different websites',
  h3titel: 'Try searching for a city, a specific hotel, or even a landmark !'
});

LogoTrivago = Backbone.Model.extend();
var logo = new LogoTrivago({
  lien: 'img/logo_trivago.jpg'
});

//title
$(function () {
  var titleTrivago = _.template("<div class='col-12'><h1 id='titre1'> <%= toto1 %> </h1></div><div class='col-12'><p id='titre2'><%= toto2 %></p></div>");
  var insert = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(titleTrivago({toto1: title.get('h1titel'), toto2: title.get('h3titel')}));
    }
  });
  new insert({
    el: $('.title'),
  });
});

//logo
$(function () {
  var titleLogo = _.template("<img src='<%= lienlogo %>'>");
  var insert = Backbone.View.extend({
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(titleLogo({lienlogo: logo.get('lien')}));
    }
  });
  new insert({
    el: $('.logoTrivago'),
  });
});

// Rooms
var Room = Backbone.Model.extend(); // model defined

var room1 = new Room({
  // model objects
  text: "Chambre simple",
  icon: "&#xf007"
});

var room2 = new Room({
  // model objects
  text: "Chambre double",
  icon: "&#xf500"
});

var room3 = new Room({
  // model objects
  text: "Chambres familiales",
  icon: "&#xf0c0"
});

var RoomCollection = Backbone.Collection.extend({
  // collection defined
  model: Room // assigned model
});

var rooCollection = new RoomCollection([room1, room2, room3]);

var RoomView = Backbone.View.extend({
  el: "#content",
  template: _.template($("#tmpl-first").html()),
  collection: rooCollection,
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(
      this.template({
        collection: this.collection
      })
    );
  }
});

var mview = new RoomView();