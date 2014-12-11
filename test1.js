/**
 * Created by PSeed on 12/4/2014.
 */
var columns;
var middleCol;
var colors;
var step;
var startFreq;
var context;
var oscillator1;
var Gainer;
var multiplier;

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
}

function UnDoStuff(id) {
  for (var i = (id - 3); i <= (id + 3); i++) {
    if (i >= 0 && i < columns) {
      var colId = 'col' + (i);
      document.getElementById(colId).style.backgroundColor = "white";
      document.getElementById(colId).style.opacity = "1";
    }
  }
}

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
}

function Oscillate(id){

  if (id <= middleCol) {
    multiplier *= -1;
  }
  oscillator1.frequency.value = startFreq + (Math.abs(middleCol - id) * multiplier * step);
}

function SetColors(){
  for (var i = 0; i < 360; i += 360 / columns) {
    colors.push([i, "100%", "50%"]);
  }
}

function start(){

  Mousetrap.bind('space',function(){alert("space"); });

  multiplier = 1;
  columns = 175;
  middleCol = 87;
  colors = new Array();
  step = 2;
  startFreq = 600;
  context = new webkitAudioContext();
  oscillator1 = context.createOscillator();
  Gainer = context.createGain();
  oscillator1.type = oscillator1.SINE;
  oscillator1.frequency.value = startFreq;
  oscillator1.start(0);
  Gainer.gain.value = 1;
  oscillator1.connect(Gainer);
  Gainer.connect(context.destination);

  SetColors();
  WriteColumns();
}