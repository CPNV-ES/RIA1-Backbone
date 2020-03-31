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
      this.$el.html(titleTrivago({ toto1: title.get('h1titel'), toto2: title.get('h3titel') }));
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
      this.$el.html(titleLogo({ lienlogo: logo.get('lien') }));
    }
  });
  new insert({
    el: $('.logoTrivago'),
  });
});


//Currency
var Currency = Backbone.Model.extend();

var CurrenciesList = Backbone.Collection.extend({
  model: Currency,
  url: 'json/currencies.json'
});

var CurrencyView = Backbone.View.extend({
  el: $('#currencies'),
  events:{
    "click  a": "change_currency",
  },
  initialize: function () {
    this.render()
  },
  render: function () {
    var that = this
    var currencies = new CurrenciesList();
    currencies.fetch({
      success: function (currencies) {
        var variable = { currencies: currencies.models }
        var template = _.template($('#tmpl_currency').html())
        that.$el.html(template(variable))
      }
    })

  },
  change_currency: function(e) {
    $("#money").text(e.target.text);
  },
});
new CurrencyView();


//Language
var Language = Backbone.Model.extend();

var LanguagesList = Backbone.Collection.extend({
  model: Language,
  url: 'json/languages.json'
});

var LanguageView = Backbone.View.extend({
  el: $('#languages'),
  events:{
    "click  a": "change_language",
  },
  
  initialize: function () {
    this.render()
  },
  render: function () {
    var that = this
    var languages = new LanguagesList();
    languages.fetch({
      success: function (languages) {
        var variable = { languages: languages.models }
        var template = _.template($('#tmpl_language').html())
        that.$el.html(template(variable))
      }
    })
  },
     
  change_language: function(e) {
      $("#language").text(e.target.text);

      $.ajax({url: "json/translations.json", success: function(result){
        $("#login").html(result["language"][e.target.text]["login"]);
        $("#titre1").html(result["language"][e.target.text]["titre1"]);
        $("#titre2").html(result["language"][e.target.text]["titre2"]);
        $("#checkIn").html(result["language"][e.target.text]["checkIn"]);
        $("#checkOut").html(result["language"][e.target.text]["checkOut"]);
        $("#money").html(result["language"][e.target.text]["money"]);
        $("#language").html(result["language"][e.target.text]["language"]);
        $("#search").html(result["language"][e.target.text]["search"]);
        $("#menu1").html(result["language"][e.target.text]["menu1"]);
        $("#menu2").html(result["language"][e.target.text]["menu2"]);
        $("#menu3").html(result["language"][e.target.text]["menu3"]);
        $("#covid19").html(result["language"][e.target.text]["covid19"]);
        $("#room_desc").html(result["language"][e.target.text]["room_desc"]);
        $("#room_title").html(result["language"][e.target.text]["room_title"]);
      }});
    },
});
new LanguageView();


// Rooms
var Room = Backbone.Model.extend();

var RoomsList = Backbone.Collection.extend({
  model: Room,
  url: 'json/rooms.json'
});

var RoomView = Backbone.View.extend({
  el: $('#rooms'),
  initialize: function () {
    this.render()
  },
  render: function () {
    var that = this
    var rooms = new RoomsList();
    rooms.fetch({
      success: function (rooms) {
        var variable = { rooms: rooms.models }
        var template = _.template($('#tmpl_room').html())
        that.$el.html(template(variable))
      }
    })

  }
});
new RoomView();


