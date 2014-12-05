var context = new webkitAudioContext();

var oscA = context.createOscillator();
var oscS = context.createOscillator();
var oscD = context.createOscillator();
var oscF = context.createOscillator();
var oscG = context.createOscillator();
var oscH = context.createOscillator();
var oscJ = context.createOscillator();
var oscK = context.createOscillator();
var oscL = context.createOscillator();
var oscSEMI = context.createOscillator();
var oscTICK = context.createOscillator();
var oscQ = context.createOscillator();
var oscW = context.createOscillator();
var oscE = context.createOscillator();
var oscR = context.createOscillator();
var oscT = context.createOscillator();
var oscY = context.createOscillator();
var oscU = context.createOscillator();
var oscI = context.createOscillator();
var oscO = context.createOscillator();
var oscP = context.createOscillator();
var oscLB = context.createOscillator();
var oscRB = context.createOscillator();
var oscZ = context.createOscillator();
var oscX = context.createOscillator();
var oscC = context.createOscillator();
var oscV = context.createOscillator();
var oscB = context.createOscillator();
var oscN = context.createOscillator();
var oscM = context.createOscillator();
var oscComma = context.createOscillator();
var oscDot = context.createOscillator();
var oscSlash = context.createOscillator();

var vcaA = context.createGain();
var vcaS = context.createGain();
var vcaD = context.createGain();
var vcaF = context.createGain();
var vcaG = context.createGain();
var vcaH = context.createGain();
var vcaJ = context.createGain();
var vcaK = context.createGain();
var vcaL = context.createGain();
var vcaSEMI = context.createGain();
var vcaTICK = context.createGain();
var vcaQ = context.createGain();
var vcaW = context.createGain();
var vcaE = context.createGain();
var vcaR = context.createGain();
var vcaT = context.createGain();
var vcaY = context.createGain();
var vcaU = context.createGain();
var vcaI = context.createGain();
var vcaO = context.createGain();
var vcaP = context.createGain();
var vcaLB = context.createGain();
var vcaRB = context.createGain();
var vcaZ = context.createGain();
var vcaX = context.createGain();
var vcaC = context.createGain();
var vcaV = context.createGain();
var vcaB = context.createGain();
var vcaN = context.createGain();
var vcaM = context.createGain();
var vcaComma = context.createGain();
var vcaDot = context.createGain();
var vcaSlash = context.createGain();

function loaded(){

    setWaveType();
    setFrequency();
    startOscillators();
    setGain();
    connectGain();
    connectDestination();
    bindMouseTrap();
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
};

function bindMouseTrap(){


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
};