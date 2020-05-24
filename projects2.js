var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/projects.json";
$.getJSON(url, function( data ) {
  str = "<div class=\"row w-100 mb-4\"></div>";
  str += "<div class=\"col-12\"><h3 class=\"align-self-bottom\">projects</h3></div>";
  //str += "<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex align-items-baseline\"><h3 class=\"align-self-bottom\">Projects.</h3></div>";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    str += "<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0\">";
    str += "<div class=\"hovereffect\">";
    str += "<img class=\"img-responsive\" src=\"" + obj['img'] + "\" width=\"100%\" alt=\"\">";
    //str += "   <img class=\"img-responsive\" src=\"https://pbs.twimg.com/media/DPZqPxuXkAA7ATw?format=jpg&name=small\" alt=\"\">";
    str += "        <div class=\"overlay\">";
    str += "            <h2>" + obj['title'] + "</h2>";
	str += "			<p class=\"info col-11\"><span style=\"text-align: justify;float: left;\">";
    if (obj['subtitle'] !== undefined) {
        //str += "<span class=\"project-subtitle\">" + obj['subtitle'] + "</span></br>";
    }
    if (obj['desc'] !== undefined) {
	  str += "<span class=\"mt-2 project-desc\">" + obj['desc'] + "</span></br>";
    }
	str += "			</br></span><span style=\"text-align:center;\">";
    if (obj['link'] !== undefined) {
	  str += "<a href=\"" + obj['link'] + "\"><i class=\"mx-3 fab fa-readme\"></i></a>";
    }
    if (obj['youtube'] !== undefined) {
	  str += "<a href=\"" + obj['youtube'] + "\"><i class=\"fab fa-youtube\"></i></a>";
    }
	str += "		</span>	</p>";
    str += "       </div>";
    str += "</div>";
    str += "</div>";
  }
  $("#projects").html(str)
})

var url =
    "https://raw.githubusercontent.com/ndem0/www/master/data/softwares.json";
$.getJSON(url, function( data ) {
  str = "<div class=\"row w-100 mb-4\"></div>";
  str += "<div class=\"col-12\"><h3 class=\"align-self-bottom\">software</h3></div>";
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log(obj);
    str += "<div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0\">";
    str += "<div class=\"hovereffect\">";
    str += "<img class=\"img-responsive\" src=\"" + obj['img'] + "\" width=\"100%\" alt=\"\">";
    str += "        <div class=\"overlay\">";
    str += "            <h2>" + obj['title'] + "</h2>";
	str += "			<p class=\"info col-11\"><span class=\"w-100\"style=\"text-align: justify;float: left;\">";
    if (obj['subtitle'] !== undefined) {
        //str += "<span class=\"project-subtitle\">" + obj['subtitle'] + "</span></br>";
    }
    if (obj['desc'] !== undefined) {
	  str += "<span class=\"mt-2 project-desc\">" + obj['desc'] + "</span></br>";
    }
	str += "			</br></span></br><span style=\"text-align:center;\">";
    if (obj['link'] !== undefined) {
	  str += "<a href=\"" + obj['link'] + "\"><i class=\"mx-3 fab fa-readme\"></i></a>";
    }
    if (obj['github'] !== undefined) {
	  str += "<a href=\"" + obj['github'] + "\"><i class=\"fab fa-git\"></i></a>";
    }
	str += "		</span>	</p>";
    str += "       </div>";
    str += "</div>";
    str += "</div>";
  }
  $("#softwares").html(str)
})
