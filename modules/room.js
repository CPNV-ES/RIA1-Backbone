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