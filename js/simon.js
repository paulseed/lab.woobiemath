/**
 * Created by elizabethcrawford on 12/10/14.
 */


var context = new AudioContext();
var osc = context.createOscillator();
var gain = context.createGain();
osc.type = osc.SINE;
var freqBlue = 220;
var freqYellow = 440;
var freqRed = 880;
var freqGreen = 1100;
osc.start(0);
gain.gain.value = 0;
osc.connect(gain);
gain.connect(context.destination);

// GREEN -------------------------
$("#green").mousedown(function() {
    $("#green").css({opacity: 1});
    osc.frequency.value = freqGreen;
    gain.gain.value = 1;
});
$("#green").mouseup(function() {
    $("#green").css({opacity:.5});
    gain.gain.value = 0;
});
$("#green").focusout(function() {
    $("#green").css({opacity:.5});
    gain.gain.value = 0;
});

// RED -------------------------
$("#red").mousedown(function() {
    $("#red").css({opacity: 1});
    osc.frequency.value = freqRed;
    gain.gain.value = 1;
});
$("#red").mouseup(function() {
    $("#red").css({opacity:.5});
    gain.gain.value = 0;
});
$("#red").focusout(function() {
    $("#red").css({opacity:.5});
    gain.gain.value = 0;
});

// YELLOW -------------------------
$("#yellow").mousedown(function() {
    $("#yellow").css({opacity: 1});
    osc.frequency.value = freqYellow;
    gain.gain.value = 1;
});
$("#yellow").mouseup(function() {
    $("#yellow").css({opacity:.5});
    gain.gain.value = 0;
});
$("#yellow").focusout(function() {
    $("#yellow").css({opacity:.5});
    gain.gain.value = 0;
});

// BLUE -------------------------
$("#blue").mousedown(function() {
    $("#blue").css({opacity: 1});
    osc.frequency.value = freqBlue;
    gain.gain.value = 1;
});
$("#blue").mouseup(function() {
    $("#blue").css({opacity:.5});
    gain.gain.value = 0;
});
$("#blue").focusout(function() {
    $("#blue").css({opacity:.5});
    gain.gain.value = 0;
});