/**
 * Created by elizabethcrawford on 12/10/14.
 */
var context = new AudioContext();
var osc = context.createOscillator();
var volume = context.createGain();
var freqBlue = 220;
var freqYellow = 440;
var freqRed = 880;
var freqGreen = 1100;
var signals = [];

function init(){

    osc.type = osc.SINE;
    osc.start(0);
    volume.gain.value = 0;
    osc.connect(volume);
    volume.connect(context.destination);
    setUpListeners();
};

function setUpListeners(){

    //KILL TONE ON MOUSE RELEASE ANYWHERE
    $("#fixed").mouseup(function() {
        cleanUp();
    });
    $("#centered50").mouseup(function() {
        cleanUp();
    });
    $("#center").mouseup(function() {
        cleanUp();
    });
    $("#back").mouseup(function() {
        cleanUp();
    });

// GREEN -------------------------
    $("#green").mousedown(function() {
        green();
    });
    $("#green").mouseup(function() {
        cleanUp();
    });

// RED -------------------------
    $("#red").mousedown(function() {
        red();
    });
    $("#red").mouseup(function() {
        cleanUp();
    });

// YELLOW -------------------------
    $("#yellow").mousedown(function() {
        yellow();
    });
    $("#yellow").mouseup(function() {
        cleanUp();
    });

// BLUE -------------------------
    $("#blue").mousedown(function() {
        blue();
    });
    $("#blue").mouseup(function() {
        cleanUp();
    });
};

function start(){

    //var signal = getSignal();
    //signals.push(signal);
    //signal();
    //
    //window.setTimeout(function(){
    //cleanUp();
    //},500);

    //replaySignals();
};


function replaySignals(){
    for(var i=0;i<signals.length;i++){
        signals[0]();
        cleanUp();
    }
};

function getSignal(){
    var signal= Math.round(Math.random() * 4);
    switch(signal) {
        case 1:
            return green;
        case 2:
            return red;
        case 3:
            return yellow;
        case 4:
            return blue;
    }
};

function cleanUp(){
    $("#green").css({opacity:.5});
    $("#red").css({opacity:.5});
    $("#yellow").css({opacity:.5});
    $("#blue").css({opacity:.5});
    volume.gain.value = 0;
};

function green(){
    $("#green").css({opacity: 1});
    osc.frequency.value = freqGreen;
    volume.gain.value = 1;
    signals.push(green);
};

function red(){
    $("#red").css({opacity: 1});
    osc.frequency.value = freqRed;
    volume.gain.value = 1;
    signals.push(red);
};

function yellow(){
    $("#yellow").css({opacity: 1});
    osc.frequency.value = freqYellow;
    volume.gain.value = 1;
    signals.push(yellow);
};

function blue(){
    $("#blue").css({opacity: 1});
    osc.frequency.value = freqBlue;
    volume.gain.value = 1;
    signals.push(blue);
};

window.onload = init;