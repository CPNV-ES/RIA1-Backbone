
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