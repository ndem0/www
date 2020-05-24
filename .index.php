<!DOCTYPE html>
<html>
<title>Nicola Demo</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
html,body,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
h1 {font-family: "Montserrat", sans-serif}
</style>
<body class="w3-light-grey">

<!-- Page Container -->
<div class="w3-content w3-margin-top" style="max-width:1400px;">

  <!-- The Grid -->
  <div class="w3-row-padding">
    <div class="w3-row w3-center">
      <h1 class="w3-text-blue w3-wide" style="text-shadow: 2px 2px 4px #999"><b>Nicola Demo</b></h1>
      <h3 class="w3-text-white" style="text-shadow: 2px 2px 4px #999">Scientific Software Developer</h3>
    </div>
  
    <!-- Left Column -->
    <div class="w3-third">
    
      <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-container">
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue"></i>Trieste, IT</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue"></i>demo.nicola@gmail.com</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue"></i>+39 340 7089 499</p>
          <hr>

          <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-blue"></i>Skills</b></p>
          <?php 
          foreach (file('skills.csv') as $line) {
            $elements = explode(";", $line);
            $elements = array_map('trim', $elements);
            
            echo '<p>'.$elements[0].'</p>';
            echo '<div class="w3-light-grey w3-round-xlarge w3-small">';
            echo '  <div class="w3-container w3-center w3-round-xlarge w3-blue" style="width:'.$elements[1].'%">'.$elements[1].'%</div>';
            echo '</div>';
          }?>
          <br>

          <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-blue"></i>Languages</b></p>
          <?php 
          foreach (file('languages.csv') as $line) {
            $elements = explode(";", $line);
            $elements = array_map('trim', $elements);
            
            echo '<p>'.$elements[0].': <text class="w3-text-blue">'.$elements[1].'</text></p>';
          }?>
          <br>
        </div>
      </div><br>

    <!-- End Left Column -->
    </div>

    <!-- Right Column -->
    <div class="w3-twothird">
    
      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Work Experience</h2>
          <?php 
          foreach (file('work.csv') as $line) {
            $elements = explode(";", $line);
            $elements = array_map('trim', $elements);
            
            echo '<div class="w3-container">';
            echo '  <h5 class="w3-opacity"><b>'.$elements[0].'</b></h5>';
            echo '  <div class="w3-right w3-opacity"><i>'.$elements[2].'</i></div>';
            echo '  <h6 class="w3-text-blue"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'.$elements[1].'</h6>';
            echo '  <div>'.$elements[3].'</div>';
            echo '  <hr>';
            echo '</div>';
          }?>
      </div>

      <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue"></i>Education</h2>
          <?php 
          foreach (file('education.csv') as $line) {
            $elements = explode(";", $line);
            $elements = array_map('trim', $elements);
            
            echo '<div class="w3-container">';
            echo '  <h5 class="w3-opacity"><b>'.$elements[0].'</b></h5>';
            echo '  <div class="w3-right w3-opacity"><i>'.$elements[2].'</i></div>';
            echo '  <h6 class="w3-text-blue"><i class="fa fa-calendar fa-fw w3-margin-right"></i>'.$elements[1].'</h6>';
            echo '  <div>'.$elements[3].'</div>';
            echo '  <hr>';
            echo '</div>';
          }?>
      </div>

    <!-- End Right Column -->
    </div>
    
  <!-- End Grid -->
  </div>
  
  <!-- End Page Container -->
</div>

<footer class="w3-container w3-blue w3-center w3-margin-top">
  <p>Find me on social media.</p>
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p></p>
</footer>

</body>
</html>

