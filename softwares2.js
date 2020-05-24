var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/projects.json";
$.getJSON(url, function( data ) {
  str = "<div class=\"col-12\">";
  str += "<div id=\"carouselsoftwares\" class=\"carousel slide carousel-fade h-100\" data-ride=\"carousel\">";
  str += "<ol class=\"carousel-indicators\">";
  for (var i = 0; i < data.length; i++) {
    str += "<li data-target=\"#carouselsoftwares\" data-slide-to=\"";
    str += i.toString();
    if (i === 0) {
      str += "\" class=\"active";
    }
    str += "\"></li>";
  }
  str += "</ol>";
  str += "<div class=\"row d-flex align-items-center justify-content-center h-100\">";
  str += "<div class=\"carousel-inner h-75 col-9\">";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log(obj);
    str += "<div class=\"h-100 px-5 py-4 carousel-item card container";
    if (i === 0) {str += " active";}
    str += "\">";
    str += "  <div class=\"row h3\">" + obj['title'] + "</div>";
    str += "  <div class=\"row h5\">" + obj['subtitle'] + "</div>";
    str += "  <div class=\"row\">" + obj['desc'] + "</div>";
    str += "</div>";
  }
  str += "</div>";
  str += "</div>";
  str += "<a class=\"carousel-control-prev\" href=\"#carouselsoftwares\" role=\"button\" data-slide=\"prev\">";
  str += "  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>";
  str += "  <span class=\"sr-only\">Previous</span>";
  str += "</a>";
  str += "<a class=\"carousel-control-next\" href=\"#carouselsoftwares\" role=\"button\" data-slide=\"next\">";
  str += "  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>";
  str += "  <span class=\"sr-only\">Next</span>";
  str += "</a>";
  str += "</div>";
  str += "</div>";
  $("#softwares").html(str)
})
