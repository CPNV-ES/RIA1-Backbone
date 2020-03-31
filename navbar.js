// Currencies
// var Currency = Backbone.Model.extend({
//   defaults: {
//     shortname: 'CHF'
//   }
// });

// var cur1 = new Currency({
//   shortname: 'EUR'
// });
// var cur2 = new Currency({
//   shortname: 'USD'
// });
// var cur3 = new Currency({
//   shortname: 'GBP'
// });

// var currenciesCollection = Backbone.Collection.extend({
//   model: Currency
// });

// var Currencies = new currenciesCollection;
// Currencies.add(cur1);
// Currencies.add(cur2);
// Currencies.add(cur3);
// var currencyView = Backbone.View.extend({
//   el:"#lang",
//   template: _.template($("#tmpl-curr").html()),
//   collection: Currencies,
//   initialize:function(){
//    this.render();
// },
// render:function(){
//    this.$el.html(this.template({
//    collection: this.collection
// }));
// }

// });

// Languages

var language = Backbone.Model.extend({
  defaults: {
    shortname: 'FR'
  }
});
var lang1 = new language({
  shortname: 'DE'
});

var lang2 =  new language({
  shortname: 'EN'
});
var lang3 =  new language({
  shortname: 'FR'
});

var languagesCollection = Backbone.Collection.extend({
  model : language
});

var languages = new languagesCollection([lang1,lang2,lang3]);

var LanguageView = Backbone.View.extend({
    el:"#lang",
    template: _.template($("#tmpl-lang").html()),
    collection: languages,
    initialize:function(){
      this.render();
  },
  render:function(){
      this.$el.html(this.template({
      collection: this.collection
  }));
  }
  
});
var mview = new LanguageView();
// var menu = Backbone.Model.extend({
//   defaults: {
    
//   }
// });