var input = document.querySelector("input"),
  wiki = document.getElementById("wikiArticle");
var wikiUrl = "";

$(input).keypress(function(e) {
  if (e.keyCode == 13) {
    var articleList = [];

    wikiUrl = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=10&search=" + $(input).val();
    $(wiki).empty();
    $.ajax({
      url: wikiUrl,
      dataType: 'jsonp',
      type: 'POST',
      success: function(response) {
        for (var i = 0; i < response[1].length; i++) {
          $(wiki).append("<li><strong><a href='http://en.wikipedia.org/wiki/" + response[1][i] + "' target='_blank'>" + response[1][i] + "</strong></a><p>" + response[2][i] + "</p></li>");
        }
        $(wiki).append("<i class='fa fa-times-circle-o fa-4x' onclick='clearSearch()'></i>");
      }
    });
  }
});

var clearSearch = function() {
  $(wiki).html("");
  $(input).val("");
}
