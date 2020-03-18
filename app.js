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
  var titleTrivago = _.template("<div class='col-12'><h1> <%= toto1 %> </h1></div><div class='col-12'><p><%= toto2 %></p></div>");
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

