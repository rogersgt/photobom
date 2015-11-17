
module.exports = {
  post: [
    "<div class='feed'><ul id='<%= _id %>' class='picInfo'>",
    "<li class='image'><img src='<%= url %>' alt='<%= title %>'/></li>",
    "<li><h4><%= title %></h4></li>",
    "<hr>",
    "<li><p><%= caption %></p><button class='like'>Like</button><button class='dislike'>Bom</button>",
    "<span>Likes</span><h3><%= likes %></h3></li></ul></div>"
  ].join("")
};
