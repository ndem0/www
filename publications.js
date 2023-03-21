var url =
    "https://raw.githubusercontent.com/ndem0/pubblications/json/publications.json";
$.getJSON(url, function( data ) {
  var years = data.map(function(x) { return x['year']; });
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  function clean_latex(string) {
    string = string.replace("\\'e", "é");
    string = string.replace("\\", "");	  
    return string
  }

  years = years.filter(onlyUnique).sort().reverse(); // returns ['a', 1, 2, '1']
  var str = '';
  str += "<nav class=\"navbar navbar-dark navbar-expand-md justify-content-between w-100\">";
  //str += "<div class=\"container-fluid\">";
  str += "<button class=\"navbar-toggler border-0\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-nav\"><span class=\"p-font\">Chose year</span></button>";
  str += "<div class=\"navbar-collapse collapse dual-nav w-50 order-1 order-md-0\">";
  str += "<ul class=\"navbar-nav\">";
  str += "<li class=\"nav-item\"><span class=\"year-link\">Go to year: </span></li>";
  for (var iyear = 0; iyear < years.length; iyear++) {
    var year = years[iyear];
    str += "<li class=\"nav-item\"><a class=\"year-link\" href=\"#" + year + "\">" +year  + "</a></li>";
  }
  str += "</ul></div>";
  //str += "<a href=\"/\" class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">Brand</a>";
  str += "<div class=\"navbar-text justify-content-end ml-auto\"><a class=\"btn btn-dark\" href=\"https://github.com/ndem0/publications/raw/master/nicolademo_publications.pdf\">Download PDF version</a></div>";
  //<i class=\"font2 fas fa-file-download fa-sm\"></i></div>";
  str += "</nav>";
  //str += "</div></nav>";
  str +=
      "<div class=\"mt-3 myscroll h-85\">";
  // str += "<div class=\"row w-auto h-75\">";
  for (var iyear = 0; iyear < years.length; iyear++) {
    var year = years[iyear];
    str += "<div id=\"" + year + "\" class=\"pl-0 container-fluid\">";
    str += "<ul class=\"check-list\">";
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      if (obj['year'] !== year)
        continue;

      str += "<li>";	    
      str += "<h4 class=\"mb-0\">" + obj["title"] + "</h4>";
      str += "<h5 class=\"mb-0\">" +obj['author'] + ", " + obj["year"];
      if (obj["journal"] !== undefined) {
	 str += ", <span class=\"font-italic\">" + clean_latex(obj["journal"]) + "</span>";  
      } else if (obj["booktitle"] !== undefined) {
	 str += ", <span class=\"font-italic\">" + clean_latex(obj["booktitle"]) + "</span>";
      }
      if (obj["doi"] !== undefined) {
        str +=
            "<a class=\"card-link ml-3\" href=\"http://www.doi.org/" + obj["doi"] + "\">doi</a>";
      }
      if (obj["eprint"] !== undefined) {
        str +=
            "<a class=\"card-link ml-3\" href=\"https://www.arxiv.org/abs/" +
            obj["eprint"] + "\">arXiv</a>";
      }
      if (obj["bibitem"] !== undefined) {
        str += "<a class=\"card-link ml-3\" href=\"" + obj["bibitem"] + "\">bibTex</a>";
      }
      str += "</li>";
    } // end card
    str += "</ul>";
    str += "</div>";
  } // end columns
  str += "</div>";
  $("#pubs").html(str)
})
