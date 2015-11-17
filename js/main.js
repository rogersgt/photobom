var $ = require('jquery');
var _ = require('underscore');
var templates = require('./templates')
var Backbone = require('backbone');
var ItemModel = require('./itemModel');
var ItemCollection = require('./itemCollection');

var itemCollection = new ItemCollection();

$(document).ready(function() {
  app.init();
});

var app = {
  init: function() {
    app.events();
  },
  events: function() {
    app.loadOld();
    app.postNew();
    app.like();
    app.dislike();
  },
  postNew: function() {
    $('.post').on('click', function(event) {
      event.preventDefault();
      var newPost = new ItemModel({
        url: $('#newPic').val(),
        caption: $('#newCap').val(),
        title: $('#newTitle').val()
      });
       newPost.save();
       $('#newPic').val("");
       $('#newCap').val("");
       $('#newTitle').val("");
    });
  },
  like: function() {
    $('.container').on('click', '.like', function() {
       var tag = $(this).parent().parent().attr('id');
       var link = $(this).parent().siblings().children('img').attr('src');
       var cap = $(this).siblings('p')[0].innerHTML;
       var title = $(this).parent().siblings().children('h4')[0].innerHTML;
       var numText = $(this).siblings('h3')[0].innerHTML;
       var num = parseInt(numText);

     num += 1;

     var updatedPost = new ItemModel({
       url: link,
       caption: cap,
       title: title,
       _id: tag,
       likes: num
     });

       updatedPost.save();
    });
  },
  dislike: function() {
    $('.container').on('click', '.dislike', function() {
       var tag = $(this).parent().parent().attr('id');
       var link = $(this).parent().siblings().children('img').attr('src');
       var cap = $(this).siblings('p')[0].innerHTML;
       var title = $(this).parent().siblings().children('h4')[0].innerHTML;
       var numText = $(this).siblings('h3')[0].innerHTML;
       var num = parseInt(numText);

     num -= 1;

     var updatedPost = new ItemModel({
       url: link,
       caption: cap,
       title: title,
       _id: tag,
       likes: num
     });

       updatedPost.save();
    });
  },
  loadOld: function() {
      var itemCollection = new ItemCollection();
      itemCollection.fetch().then(function (collectionData) {
      var temp = _.template(templates.post);
      _.each(collectionData, function(currVal, idx, array) {
        var newFoto = temp(currVal);
        $('.container').append(newFoto);
      });
    });
  }
};
