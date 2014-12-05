var columns;
var middleCol;
var colors;
var step;
var startFreq;
var contexter;
var oscillatrix;
var Gainer;
var multiplier;

function start(){

  multiplier = 1;
  columns = 175;
  middleCol = 87;
  colors = new Array();
  step = 2;
  startFreq = 500;
  contexter = new webkitAudioContext();
  oscillatrix = contexter.createOscillator();
  Gainer = contexter.createGain();
  oscillatrix.type = oscillatrix.SINE;
  oscillatrix.frequency.value = startFreq;
  oscillatrix.start(0);
  Gainer.gain.value = 0;
  oscillatrix.connect(Gainer);
  Gainer.connect(contexter.destination);

  SetColors();
  WriteColumns();
  bindSpace();
};

function DoStuff(id) {

  Oscillate(id);
  for (var i = (id - 3); i <= (id + 3); i++) {
    if (i >= 0 && i < columns) {
      var colId = 'col' + (i);
      document.getElementById(colId).style.backgroundColor = "HSL(" + colors[i] + ")";
      var opacity = 1 - ((Math.abs(id - i) * .25));
      document.getElementById(colId).style.opacity = opacity.toString();
    }
  }
};

function UnDoStuff(id) {
  for (var i = (id - 3); i <= (id + 3); i++) {
    if (i >= 0 && i < columns) {
      var colId = 'col' + (i);
      document.getElementById(colId).style.backgroundColor = "white";
      document.getElementById(colId).style.opacity = "1";
    }
  }
};

function WriteColumns() {
  var width = (100 / columns) + "%";
  var fontSize = ((Math.floor(100 / columns)) - .7);
  document.writeln("<div style='margin-left:auto;margin-right:auto;'>");

  for (var i = 0; i < columns; i++) {
    document.write("<div style='width:" + width + ";");
    document.write("height:100%;");
    document.write("float:left;");
    document.write("border-collapse:collapse;");
    document.write("color:white;");
    document.write("font-size:" + fontSize + "vw;");
    document.write("font-family:verdana;");
    document.write("font-weight:bold;");
    document.write("font-stretch:condensed;");
    document.write("text-align:center;'");
    document.write(" id='col" + i + "' onmouseover='DoStuff(" + i + ");' onmouseout='UnDoStuff(" + i + ");'>");
    document.writeln("</div>")
  }
  document.writeln("</div>")
};

function Oscillate(id){

  if (id <= middleCol) {
    multiplier *= -1;
  }
  oscillatrix.frequency.value = startFreq + (Math.abs(middleCol - id) * multiplier * step);
};

function SetColors(){
  for (var i = 0; i < 360; i += 360 / columns) {
    colors.push([i, "100%", "50%"]);
  }
};

function bindSpace() {
  document.addEventListener("keypress", function(event){

   if(event.keyCode == 32){
     if (Gainer.gain.value == 1) {
       Gainer.gain.value = 0;
     } else {
       Gainer.gain.value = 1;
     }
   }
  });
};

