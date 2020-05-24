var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/bio.json";
$.getJSON(url, function( data ) {
  /*
  var years = data.map(function(x) { return x['year']; });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  years = years.filter(onlyUnique).sort().reverse(); // returns ['a', 1, 2, '1']
  var str = '';
  str +=
      "<nav id=\"navbar-example2\" class=\"navbar navbar-light bg-transparent\">";
  str += "<ul class=\"nav nav-pills\">";
  for (var iyear = 0; iyear < years.length; iyear++) {
    var year = years[iyear];
    str += "<li class=\"nav-item\">";
    str += "<a class=\"btn btn-secondary mx-1\" href=\"#" + year + "\">" +
           year + "</a>"
    str += "</li>";
  }
  */
  birth = {"place": "Ferrara", "period":"1993", 'title': 'Birth'};
  data.push(birth);
  str = "<ul class=\"timeline\">";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    var direction = (i % 2) ? 'direction-r' : 'direction-l';
    str += "<li>";
    str += "<div class=\"" + direction + "\">";
    str += "<div class=\"flag-wrapper\">";
    str += "<span class=\"flag\">" + obj['title'] + "</span>";
    str += "<span class=\"time time-wrapper\">" + obj['period'] + "</span>";
    str += "</div>";
    str += "<div class=\"desc\">";
    str += "<p class=\"place\">" + obj['place'] + "</p>";
    if (obj['desc'] !== undefined) {str += obj['desc'];}
    str += "</div>";
    str += "</div>";
    str += "</li>";
  }
  str += "</ul>";
  $("#bio").html(str)
})
