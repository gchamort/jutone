
//récupération du slider
let sliderObj = document.getElementById('range');

//get la valeur(note) du slider
let tone1 = sliderObj.value;
console.log("première val :");
console.log(tone1);

//créé un Oscillateur avec la valeur récupérée
let osc1 = new Tone.Oscillator(tone1, "sine").toMaster();
osc1.partialCount = 1;

//watch les changement du slider
$(sliderObj).change(function() {
    //applique le changement
    osc1.frequency.value = $(this).val();
    console.log(osc1.frequency.value);
});

////////
//Tone//
////////

document.querySelector('#play-btn').addEventListener('click', function() {
    //init context pour avoir le droit de jouer du son
    Tone.context.resume();

    //joue le son en lui même
    osc1.start();
});

document.querySelector('#stop-btn').addEventListener('click', function() {
    //..
    osc1.stop();
});
