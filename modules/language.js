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
        $("#roomone").html(result["language"][e.target.text]["room_title"]);
        $("#roomtwo").html(result["language"][e.target.text]["room_title"]);
        $("#roomthree").html(result["language"][e.target.text]["room_title"]);
        $("#room1").html(result["language"][e.target.text]["room_desc"]);
        $("#room2").html(result["language"][e.target.text]["room_desc2"]);
        $("#room3").html(result["language"][e.target.text]["room_desc3"]);
        $("#money1").html(result["language"][e.target.text]["money_desc"]);
        $("#money2").html(result["language"][e.target.text]["money_desc2"]);
        $("#money3").html(result["language"][e.target.text]["money_desc3"]);
      }});
    },
});
new LanguageView();