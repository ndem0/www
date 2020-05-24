var url =
    "https://raw.githubusercontent.com/ndem0/pubblications/json/publications.json";
$.getJSON(url, function( data ) {
  var years = data.map(function(x) { return x['year']; });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  years = years.filter(onlyUnique).sort().reverse(); // returns ['a', 1, 2, '1']
  var str = '';
  str += "<nav class=\"navbar navbar-light navbar-expand-md justify-content-between w-100\">";
  //str += "<div class=\"container-fluid\">";
  str += "<button class=\"navbar-toggler border-0\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-nav\"><span class=\"p-font\">Chose year</span></button>";
  str += "<div class=\"navbar-collapse collapse dual-nav w-50 order-1 order-md-0\">";
  str += "<ul class=\"navbar-nav\">";
  for (var iyear = 0; iyear < years.length; iyear++) {
    var year = years[iyear];
    str += "<li class=\"nav-item\"><a class=\"year-link\" href=\"#" + year + "\">" +year  + "</a></li>";
  }
  str += "</ul></div>";
  //str += "<a href=\"/\" class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">Brand</a>";
  str += "<div class=\"navbar-text justify-content-end ml-auto\"><i class=\"font2 fas fa-file-download\"></i></div>";
  str += "</nav>";
  //str += "</div></nav>";
  str +=
      "<div class=\"mt-3 myscroll h-85\">";
  // str += "<div class=\"row w-auto h-75\">";
  for (var iyear = 0; iyear < years.length; iyear++) {
    var year = years[iyear];
    str += "<div id=\"" + year + "\" class=\"pl-0 container-fluid\"><h3>" + year +
           "</h3>";
    str += "<div class=\"card-columns mb-2\">";
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      if (obj['year'] !== year)
        continue;
      str += "<div class=\"card shadow-sm p-0\">";
      str += "<div class=\"card-body p-3\">";
      str += "<h5 class=\"card-title pub-card-title-font\">" + obj["title"] +
             "</h5>";
      str += "<p class=\"m-0 card-text pub-card-body pub-card-author-font\">" +
             obj["author"] + "</p>";
      /*
          if (obj["journal"] !== undefined) {
              str += "<i>" + obj["journal"] + "</i>";
          }
          str	+= "</p>";
          */
      if (obj["doi"] !== undefined) {
        str +=
            "<a class=\"card-link pub-card-link-font\" href=\"http://www.google.com/search?q=doi:" +
            obj["doi"] + "\">doi</a>";
      }
      if (obj["eprint"] !== undefined) {
        str +=
            "<a class=\"card-link pub-card-link-font\" href=\"https://www.arxiv.org/abs/" +
            obj["eprint"] + "\">arXiv</a>";
      }
      if (obj["eprint"] !== undefined) {
        str += "<a class=\"card-link pub-card-link-font\" href=\"" +
               obj["bibitem"] + "\">bibTex</a>";
        str += "</a>";
      }
      str += "</div>";
      str += "</div>";
    } // end card
    str += "</div>";
    str += "</div>";
  } // end columns
  str += "</div>";
  $("#pubs").html(str)
})
