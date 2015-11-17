var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/photobom',
  idAttribute: '_id',
  defaults: {
    url: 'http://www.fillmurray.com/460/300',
    title: '(No Title)',
    caption: '(No Caption)',
    likes: 0
  },
  initialize: function () {

  }
});
