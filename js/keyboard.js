var context = new webkitAudioContext();
var recorder;

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ, oscK, oscL, oscSEMI, oscTICK, oscQ, oscW, oscE, oscR, oscT, oscY, oscU,
    oscI, oscO, oscP, oscLB, oscRB, oscZ, oscX, oscC, oscV, oscB, oscN, oscM, oscComma, oscDot, oscSlash, oscSpace;

var vcaA,vcaS, vcaD, vcaF, vcaG, vcaH, vcaJ, vcaK, vcaL, vcaSEMI, vcaTICK, vcaQ, vcaW, vcaE, vcaR, vcaT, vcaY, vcaU,
    vcaI, vcaO, vcaP, vcaLB, vcaRB, vcaZ, vcaX, vcaC, vcaV, vcaB, vcaN, vcaM, vcaComma, vcaDot, vcaSlash, vcaSpace;

function init(){

    try {
        // webkit shim
        window.AudioContext = window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;

    } catch (e) {
        alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({audio: true},
        function(stream){
            $("#recorderContainer").css({display:"inline"});
            var input = context.createMediaStreamSource(stream);
            recorder = new Recorder(input,{workerPath:"js/vendor/recorderjs/recorderWorker.js"});
        },
        function(e) {
            //oh well
        }
    );

    createOscillators();
    createGains();
    setWaveType();
    setFrequency();
    startOscillators();
    setGain();
    connectGain();
    connectDestination();
    bindMouseTrap();
};

function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
        var url = URL.createObjectURL(blob);
        var li = document.createElement('li');
        var au = document.createElement('audio');
        var hf = document.createElement('a');

        au.controls = true;
        au.src = url;
        hf.href = url;
        hf.download = new Date().toISOString() + '.wav';
        hf.innerHTML = hf.download;
        li.appendChild(au);
        li.appendChild(hf);
        if(recordingslist.childElementCount > 2){
            recordingslist.removeChild(recordingslist.firstChild);
        }
        recordingslist.appendChild(li);
    });
}

function start(button) {
    recorder && recorder.record();
    button.disabled = true;
    button.nextElementSibling.disabled = false;
    $("#recordBtn").css({backgroundColor: "#0f0"});
    $("#stopBtn").css({backgroundColor: "#f00"});
};

function stop(button) {
    recorder && recorder.stop();
    button.disabled = true;
    button.previousElementSibling.disabled = false;
    $("#recordBtn").css({backgroundColor: "#ccc"});
    $("#stopBtn").css({backgroundColor: "#555"});

    // create WAV download link using audio data blob
    createDownloadLink();

    recorder.clear();
};

function createOscillators(){
    
     oscA = context.createOscillator();
     oscS = context.createOscillator();
     oscD = context.createOscillator();
     oscF = context.createOscillator();
     oscG = context.createOscillator();
     oscH = context.createOscillator();
     oscJ = context.createOscillator();
     oscK = context.createOscillator();
     oscL = context.createOscillator();
     oscSEMI = context.createOscillator();
     oscTICK = context.createOscillator();
     oscQ = context.createOscillator();
     oscW = context.createOscillator();
     oscE = context.createOscillator();
     oscR = context.createOscillator();
     oscT = context.createOscillator();
     oscY = context.createOscillator();
     oscU = context.createOscillator();
     oscI = context.createOscillator();
     oscO = context.createOscillator();
     oscP = context.createOscillator();
     oscLB = context.createOscillator();
     oscRB = context.createOscillator();
     oscZ = context.createOscillator();
     oscX = context.createOscillator();
     oscC = context.createOscillator();
     oscV = context.createOscillator();
     oscB = context.createOscillator();
     oscN = context.createOscillator();
     oscM = context.createOscillator();
     oscComma = context.createOscillator();
     oscDot = context.createOscillator();
     oscSlash = context.createOscillator();
     oscSpace = context.createOscillator();
};

function createGains(){

     vcaA = context.createGain();
     vcaS = context.createGain();
     vcaD = context.createGain();
     vcaF = context.createGain();
     vcaG = context.createGain();
     vcaH = context.createGain();
     vcaJ = context.createGain();
     vcaK = context.createGain();
     vcaL = context.createGain();
     vcaSEMI = context.createGain();
     vcaTICK = context.createGain();
     vcaQ = context.createGain();
     vcaW = context.createGain();
     vcaE = context.createGain();
     vcaR = context.createGain();
     vcaT = context.createGain();
     vcaY = context.createGain();
     vcaU = context.createGain();
     vcaI = context.createGain();
     vcaO = context.createGain();
     vcaP = context.createGain();
     vcaLB = context.createGain();
     vcaRB = context.createGain();
     vcaZ = context.createGain();
     vcaX = context.createGain();
     vcaC = context.createGain();
     vcaV = context.createGain();
     vcaB = context.createGain();
     vcaN = context.createGain();
     vcaM = context.createGain();
     vcaComma = context.createGain();
     vcaDot = context.createGain();
     vcaSlash = context.createGain();
     vcaSpace = context.createGain();
};

function setWaveType(){

    oscA.type = oscA.SINE;
    oscS.type = oscS.SINE;
    oscD.type = oscD.SINE;
    oscF.type = oscF.SINE;
    oscG.type = oscG.SINE;
    oscH.type = oscH.SINE;
    oscJ.type = oscJ.SINE;
    oscK.type = oscK.SINE;
    oscL.type = oscL.SINE;
    oscSEMI.type = oscSEMI.SINE;
    oscTICK.type = oscTICK.SINE;
    oscQ.type = oscQ.SINE;
    oscW.type = oscW.SINE;
    oscE.type = oscE.SINE;
    oscR.type = oscR.SINE;
    oscT.type = oscT.SINE;
    oscY.type = oscY.SINE;
    oscU.type = oscU.SINE;
    oscI.type = oscI.SINE;
    oscO.type = oscO.SINE;
    oscP.type = oscP.SINE;
    oscLB.type = oscLB.SINE;
    oscRB.type = oscRB.SINE;
    oscZ.type = oscZ.SINE;
    oscX.type = oscX.SINE;
    oscC.type = oscC.SINE;
    oscV.type = oscV.SINE;
    oscB.type = oscB.SINE;
    oscN.type = oscN.SINE;
    oscM.type = oscM.SINE;
    oscComma.type = oscComma.SINE;
    oscDot.type = oscDot.SINE;
    oscSlash.type = oscSlash.SINE;
    oscSpace.type = oscSpace.SINE;
};

function setFrequency(){

    //BOTTOM ROW
    oscZ.frequency.value = 185;
    oscX.frequency.value = 196;
    oscC.frequency.value = 207.65;
    oscV.frequency.value = 220;
    oscB.frequency.value = 233.08;
    oscN.frequency.value = 246.94;
    oscM.frequency.value = 261.63;
    oscComma.frequency.value = 277.18;
    oscDot.frequency.value = 293.66;
    oscSlash.frequency.value = 311.13;

    //MIDDLE ROW
    oscA.frequency.value = 329.63;
    oscS.frequency.value = 349.23;
    oscD.frequency.value = 369.99;
    oscF.frequency.value = 392;
    oscG.frequency.value = 415.3;
    oscH.frequency.value = 440;
    oscJ.frequency.value = 466.16;
    oscK.frequency.value = 493.88;
    oscL.frequency.value = 523.25;
    oscSEMI.frequency.value = 554.37;
    oscTICK.frequency.value = 587.33;

    //TOP ROW
    oscQ.frequency.value = 622.25;
    oscW.frequency.value = 659.25;
    oscE.frequency.value = 698.46;
    oscR.frequency.value = 739.99;
    oscT.frequency.value = 783.99;
    oscY.frequency.value = 830.61;
    oscU.frequency.value = 880;
    oscI.frequency.value = 932.33;
    oscO.frequency.value = 987.77;
    oscP.frequency.value = 1046.5;
    oscLB.frequency.value = 1108.73;
    oscRB.frequency.value = 1174.66;

    //SPACE ROW
    oscSpace.frequency.value = 174.61;
};

function startOscillators(){

    oscA.start(0);
    oscS.start(0);
    oscD.start(0);
    oscF.start(0);
    oscG.start(0);
    oscH.start(0);
    oscJ.start(0);
    oscK.start(0);
    oscL.start(0);
    oscSEMI.start(0);
    oscTICK.start(0);
    oscQ.start(0);
    oscW.start(0);
    oscE.start(0);
    oscR.start(0);
    oscT.start(0);
    oscY.start(0);
    oscU.start(0);
    oscI.start(0);
    oscO.start(0);
    oscP.start(0);
    oscLB.start(0);
    oscRB.start(0);
    oscZ.start(0);
    oscX.start(0);
    oscC.start(0);
    oscV.start(0);
    oscB.start(0);
    oscN.start(0);
    oscM.start(0);
    oscComma.start(0);
    oscDot.start(0);
    oscSlash.start(0);
    oscSpace.start(0);
};

function setGain(){

    vcaA.gain.value = 0;
    vcaS.gain.value = 0;
    vcaD.gain.value = 0;
    vcaF.gain.value = 0;
    vcaG.gain.value = 0;
    vcaH.gain.value = 0;
    vcaJ.gain.value = 0;
    vcaK.gain.value = 0;
    vcaL.gain.value = 0;
    vcaSEMI.gain.value = 0;
    vcaTICK.gain.value = 0;
    vcaQ.gain.value = 0;
    vcaW.gain.value = 0;
    vcaE.gain.value = 0;
    vcaR.gain.value = 0;
    vcaT.gain.value = 0;
    vcaY.gain.value = 0;
    vcaU.gain.value = 0;
    vcaI.gain.value = 0;
    vcaO.gain.value = 0;
    vcaP.gain.value = 0;
    vcaLB.gain.value = 0;
    vcaRB.gain.value = 0;
    vcaZ.gain.value = 0;
    vcaX.gain.value = 0;
    vcaC.gain.value = 0;
    vcaV.gain.value = 0;
    vcaB.gain.value = 0;
    vcaN.gain.value = 0;
    vcaM.gain.value = 0;
    vcaComma.gain.value = 0;
    vcaDot.gain.value = 0;
    vcaSlash.gain.value = 0;
    vcaSpace.gain.value = 0;
};

function connectGain(){

    oscA.connect(vcaA);
    oscS.connect(vcaS);
    oscD.connect(vcaD);
    oscF.connect(vcaF);
    oscG.connect(vcaG);
    oscH.connect(vcaH);
    oscJ.connect(vcaJ);
    oscK.connect(vcaK);
    oscL.connect(vcaL);
    oscSEMI.connect(vcaSEMI);
    oscTICK.connect(vcaTICK);
    oscQ.connect(vcaQ);
    oscW.connect(vcaW);
    oscE.connect(vcaE);
    oscR.connect(vcaR);
    oscT.connect(vcaT);
    oscY.connect(vcaY);
    oscU.connect(vcaU);
    oscI.connect(vcaI);
    oscO.connect(vcaO);
    oscP.connect(vcaP);
    oscLB.connect(vcaLB);
    oscRB.connect(vcaRB);
    oscZ.connect(vcaZ);
    oscX.connect(vcaX);
    oscC.connect(vcaC);
    oscV.connect(vcaV);
    oscB.connect(vcaB);
    oscN.connect(vcaN);
    oscM.connect(vcaM);
    oscComma.connect(vcaComma);
    oscDot.connect(vcaDot);
    oscSlash.connect(vcaSlash);
    oscSpace.connect(vcaSpace);
};

function connectDestination(){

    vcaA.connect(context.destination);
    vcaS.connect(context.destination);
    vcaD.connect(context.destination);
    vcaF.connect(context.destination);
    vcaG.connect(context.destination);
    vcaH.connect(context.destination);
    vcaJ.connect(context.destination);
    vcaK.connect(context.destination);
    vcaL.connect(context.destination);
    vcaSEMI.connect(context.destination);
    vcaTICK.connect(context.destination);
    vcaQ.connect(context.destination);
    vcaW.connect(context.destination);
    vcaE.connect(context.destination);
    vcaR.connect(context.destination);
    vcaT.connect(context.destination);
    vcaY.connect(context.destination);
    vcaU.connect(context.destination);
    vcaI.connect(context.destination);
    vcaO.connect(context.destination);
    vcaP.connect(context.destination);
    vcaLB.connect(context.destination);
    vcaRB.connect(context.destination);
    vcaZ.connect(context.destination);
    vcaX.connect(context.destination);
    vcaC.connect(context.destination);
    vcaV.connect(context.destination);
    vcaB.connect(context.destination);
    vcaN.connect(context.destination);
    vcaM.connect(context.destination);
    vcaComma.connect(context.destination);
    vcaDot.connect(context.destination);
    vcaSlash.connect(context.destination);
    vcaSpace.connect(context.destination);
};

function bindMouseTrap(){

    Mousetrap.bind("shift+r",function(){
        var recordBtn = document.getElementById("recordBtn");
        if(!recordBtn.disabled){
            start(recordBtn);
        }
    });
    Mousetrap.bind("shift+s",function(){
        var stopBtn = document.getElementById("stopBtn");
        if(!stopBtn.disabled){
            stop(stopBtn);
        }
    });

    Mousetrap.bind('q',function(){
        vcaQ.gain.value = 1;
        document.getElementById("btn-q").style.backgroundColor = "rgb(255, 255, 255)";
    },'keydown');
    Mousetrap.bind('q',function(){
        vcaQ.gain.value = 0;
        document.getElementById("btn-q").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('w',function(){
        vcaW.gain.value = 1;
        document.getElementById("btn-w").style.backgroundColor = "rgb(64, 0, 0)";
    },'keydown');
    Mousetrap.bind('w',function(){
        vcaW.gain.value = 0;
        document.getElementById("btn-w").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('e',function(){
        vcaE.gain.value = 1;
        document.getElementById("btn-e").style.backgroundColor = "rgb(128, 0, 0)";
    },'keydown');
    Mousetrap.bind('e',function(){
        vcaE.gain.value = 0;
        document.getElementById("btn-e").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('r',function(){
        vcaR.gain.value = 1;
        document.getElementById("btn-r").style.backgroundColor = "rgb(192, 0, 0)";
    },'keydown');
    Mousetrap.bind('r',function(){
        vcaR.gain.value = 0;
        document.getElementById("btn-r").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('t',function(){
        vcaT.gain.value = 1;
        document.getElementById("btn-t").style.backgroundColor = "rgb(255, 0, 0)";
    },'keydown');
    Mousetrap.bind('t',function(){
        vcaT.gain.value = 0;
        document.getElementById("btn-t").style.backgroundColor = "inherit";
    },'keyup');


    Mousetrap.bind('y',function(){
        vcaY.gain.value = 1;
        document.getElementById("btn-y").style.backgroundColor = "rgb(64, 64, 0)";
    },'keydown');
    Mousetrap.bind('y',function(){
        vcaY.gain.value = 0;
        document.getElementById("btn-y").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('u',function(){
        vcaU.gain.value = 1;
        document.getElementById("btn-u").style.backgroundColor = "rgb(128, 128, 0)";
    },'keydown');
    Mousetrap.bind('u',function(){
        vcaU.gain.value = 0;
        document.getElementById("btn-u").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('i',function(){
        vcaI.gain.value = 1;
        document.getElementById("btn-i").style.backgroundColor = "rgb(192, 192, 0)";
    },'keydown');
    Mousetrap.bind('i',function(){
        vcaI.gain.value = 0;
        document.getElementById("btn-i").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('o',function(){
        vcaO.gain.value = 1;
        document.getElementById("btn-o").style.backgroundColor = "rgb(255, 255, 0)";
    },'keydown');
    Mousetrap.bind('o',function(){
        vcaO.gain.value = 0;
        document.getElementById("btn-o").style.backgroundColor = "inherit";
    },'keyup');


    Mousetrap.bind('p',function(){
        vcaP.gain.value = 1;
        document.getElementById("btn-p").style.backgroundColor = "rgb(0, 64, 0)";
    },'keydown');
    Mousetrap.bind('p',function(){
        vcaP.gain.value = 0;
        document.getElementById("btn-p").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('[',function(){
        vcaLB.gain.value = 1;
        document.getElementById("btn-lb").style.backgroundColor = "rgb(0, 128, 0)";
    },'keydown');
    Mousetrap.bind('[',function(){
        vcaLB.gain.value = 0;
        document.getElementById("btn-lb").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind(']',function(){
        vcaRB.gain.value = 1;
        document.getElementById("btn-rb").style.backgroundColor = "rgb(0, 192, 0)";
    },'keydown');
    Mousetrap.bind(']',function(){
        vcaRB.gain.value = 0;
        document.getElementById("btn-rb").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('a',function(){
        vcaA.gain.value = 1;
        document.getElementById("btn-a").style.backgroundColor = "rgb(0, 255, 0)";
    },'keydown');
    Mousetrap.bind('a',function(){
        vcaA.gain.value = 0;
        document.getElementById("btn-a").style.backgroundColor = "inherit";
    },'keyup');


    Mousetrap.bind('s',function(){
        vcaS.gain.value = 1;
        document.getElementById("btn-s").style.backgroundColor = "rgb(0, 64, 64)";
    },'keydown');
    Mousetrap.bind('s',function(){
        vcaS.gain.value = 0;
        document.getElementById("btn-s").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('d',function(){
        vcaD.gain.value = 1;
        document.getElementById("btn-d").style.backgroundColor = "rgb(0, 128, 128)";
    },'keydown');
    Mousetrap.bind('d',function(){
        vcaD.gain.value = 0;
        document.getElementById("btn-d").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('f',function(){
        vcaF.gain.value = 1;
        document.getElementById("btn-f").style.backgroundColor = "rgb(0, 192, 192)";
    },'keydown');
    Mousetrap.bind('f',function(){
        vcaF.gain.value = 0;
        document.getElementById("btn-f").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('g',function(){
        vcaG.gain.value = 1;
        document.getElementById("btn-g").style.backgroundColor = "rgb(0, 255, 255)";
    },'keydown');
    Mousetrap.bind('g',function(){
        vcaG.gain.value = 0;
        document.getElementById("btn-g").style.backgroundColor = "inherit";
    },'keyup');


    Mousetrap.bind('h',function(){
        vcaH.gain.value = 1;
        document.getElementById("btn-h").style.backgroundColor = "rgb(0, 0, 64)";
    },'keydown');
    Mousetrap.bind('h',function(){
        vcaH.gain.value = 0;
        document.getElementById("btn-h").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('j',function(){
        vcaJ.gain.value = 1;
        document.getElementById("btn-j").style.backgroundColor = "rgb(0, 0, 128)";
    },'keydown');
    Mousetrap.bind('j',function(){
        vcaJ.gain.value = 0;
        document.getElementById("btn-j").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('k',function(){
        vcaK.gain.value = 1;
        document.getElementById("btn-k").style.backgroundColor = "rgb(0, 0, 192)";
    },'keydown');
    Mousetrap.bind('k',function(){
        vcaK.gain.value = 0;
        document.getElementById("btn-k").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('l',function(){
        vcaL.gain.value = 1;
        document.getElementById("btn-l").style.backgroundColor = "rgb(0, 0, 255)";
    },'keydown');
    Mousetrap.bind('l',function(){
        vcaL.gain.value = 0;
        document.getElementById("btn-l").style.backgroundColor = "inherit";
    },'keyup');


    Mousetrap.bind(';',function(){
        vcaSEMI.gain.value = 1;
        document.getElementById("btn-semi").style.backgroundColor = "rgb(64, 0, 64)";
    },'keydown');
    Mousetrap.bind(';',function(){
        vcaSEMI.gain.value = 0;
        document.getElementById("btn-semi").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('\'',function(){
        vcaTICK.gain.value = 1;
        document.getElementById("btn-tick").style.backgroundColor = "rgb(128, 0, 128)";
    },'keydown');
    Mousetrap.bind('\'',function(){
        vcaTICK.gain.value = 0;
        document.getElementById("btn-tick").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('z',function(){
        vcaZ.gain.value = 1;
        document.getElementById("btn-z").style.backgroundColor = "rgb(192, 0, 192)";
    },'keydown');
    Mousetrap.bind('z',function(){
        vcaZ.gain.value = 0;
        document.getElementById("btn-z").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('x',function(){
        vcaX.gain.value = 1;
        document.getElementById("btn-x").style.backgroundColor = "rgb(255, 0, 255)";
    },'keydown');
    Mousetrap.bind('x',function(){
        vcaX.gain.value = 0;
        document.getElementById("btn-x").style.backgroundColor = "inherit";
    },'keyup');


    //COLOURS REPEAT NOW
    Mousetrap.bind('c',function(){
        vcaC.gain.value = 1;
        document.getElementById("btn-c").style.backgroundColor = "rgb(255, 255, 255)";
    },'keydown');
    Mousetrap.bind('c',function(){
        vcaC.gain.value = 0;
        document.getElementById("btn-c").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('v',function(){
        vcaV.gain.value = 1;
        document.getElementById("btn-v").style.backgroundColor = "rgb(64, 0, 0)";
    },'keydown');
    Mousetrap.bind('v',function(){
        vcaV.gain.value = 0;
        document.getElementById("btn-v").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('b',function(){
        vcaB.gain.value = 1;
        document.getElementById("btn-b").style.backgroundColor = "rgb(128, 0, 0)";
    },'keydown');
    Mousetrap.bind('b',function(){
        vcaB.gain.value = 0;
        document.getElementById("btn-b").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('n',function(){
        vcaN.gain.value = 1;
        document.getElementById("btn-n").style.backgroundColor = "rgb(192, 0, 0)";
    },'keydown');
    Mousetrap.bind('n',function(){
        vcaN.gain.value = 0;
        document.getElementById("btn-n").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('m',function(){
        vcaM.gain.value = 1;
        document.getElementById("btn-m").style.backgroundColor = "rgb(255, 0, 0)";
    },'keydown');
    Mousetrap.bind('m',function(){
        vcaM.gain.value = 0;
        document.getElementById("btn-m").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind(',',function(){
        vcaComma.gain.value = 1;
        document.getElementById("btn-comma").style.backgroundColor = "rgb(64, 64, 0)";
    },'keydown');
    Mousetrap.bind(',',function(){
        vcaComma.gain.value = 0;
        document.getElementById("btn-comma").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('.',function(){
        vcaDot.gain.value = 1;
        document.getElementById("btn-dot").style.backgroundColor = "rgb(128, 128, 0)";
    },'keydown');
    Mousetrap.bind('.',function(){
        vcaDot.gain.value = 0;
        document.getElementById("btn-dot").style.backgroundColor = "inherit";
    },'keyup');
    Mousetrap.bind('/',function(){
        vcaSlash.gain.value = 1;
        document.getElementById("btn-slash").style.backgroundColor = "rgb(192, 192, 0)";
    },'keydown');
    Mousetrap.bind('/',function(){
        vcaSlash.gain.value = 0;
        document.getElementById("btn-slash").style.backgroundColor = "inherit";
    },'keyup');

    Mousetrap.bind('space',function(){
        vcaSpace.gain.value = 1;
        document.getElementById("btn-space").style.backgroundColor = "rgb(204, 116, 0)";
    },'keydown');
    Mousetrap.bind('space',function(){
        vcaSpace.gain.value = 0;
        document.getElementById("btn-space").style.backgroundColor = "inherit";
    },'keyup');
};

window.onload = init;