var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/talks.json";
$.getJSON(url, function( data ) {
  str = '<h3>talks</h3>';
  str += "<ul class=\"check-list\">";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    str += "<li>";
    str += "<h4 class=\"mb-0\">" + obj["title"] + "</h4>";
    str += "<h5 class=\"mb-0\">" +obj['city'] + ", " + obj["year"] + "</h5>";
    str += "<h6 class=\"mb-0\">" + obj["desc"] + "</h6>";
    str += "</li>";
  }
  str += "</ul>";
  $("#talks").html(str)
})
var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/teaching.json";
$.getJSON(url, function( data ) {
  str = '<h3>teaching</h3>';
  str += "<ul class=\"check-list\">";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    str += "<li>";
    str += "<h4 class=\"mb-0\">" + obj["title"] + "</h4>";
    str += "<h5 class=\"mb-0\">" +obj['city'] + ", " + obj["year"] + "</h5>";
    str += "<h6 class=\"mb-0\">" + obj["desc"] + "</h6>";
    str += "</li>";
  }
  str += "</ul>";
  $("#teaching").html(str)
})
var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/students.json";
$.getJSON(url, function( data ) {
  str = '<h3>mentoring</h3>';
  str += "<ul class=\"check-list\">";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    str += "<li>";
    str += "<h4 class=\"mb-0\">" + obj["name"] + "</h4>";
    str += "<h5 class=\"mb-0\">" +obj['role'] + "</h5>";
    if (obj['desc'] !== undefined) {
      str += "<h6 class=\"mb-0\">" + obj["desc"];
    }
    if (obj['link'] !== undefined) {
      str += "<a href=\"" + obj['link'] +"\"><i class=\"fas fa-book\"></i></a>";
    }
    str += "</h6>";
    str += "</li>";
  }
  str += "</ul>";
  $("#students").html(str)
})
