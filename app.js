
/*
créé un Oscillateur avec valeures de base
*/
let tone1 = $('#btnC').attr('data-id');  //set à C3 (Do)
let forme1 = "sine1";
let osc1 = new Tone.Oscillator(tone1, forme1).toMaster();
//osc1.fadeOut = 2; //TODO ?

/*
bouton play
*/
document.querySelector('#play-btn').addEventListener('click', function() {
    //init context pour avoir le droit de jouer du son
    Tone.context.resume();

    //joue le son en lui même
    osc1.start();
});

/*
bouton stop
*/
document.querySelector('#stop-btn').addEventListener('click', function() {
    //..
    osc1.stop();
});

/*
watch les changement du slider
*/
$('#range').change(function() {
    //applique le changement
    osc1.frequency.value = $(this).val();
    let val = $(this).val();
//    $('#input-value').text(val);

    console.log(osc1.frequency.value);
});

/*
watch les changement des boutons
 */
$('.tones').click(function() {
    //applique le changement
    osc1.frequency.value = $(this).attr('data-id');

    // mettre à jour la position du slider
    // $(sliderObj).val() = $(this).attr('data-id'); //TODO !
    //> faire dans un fonction ou un watcher de la valeur pour set en slider

    console.log(osc1.frequency.value);
});

/*
watch les changement de l'input
*/
$('#input-value').change(function() {
    //applique le changement
    osc1.frequency.value = $(this).val();

    console.log(osc1.frequency.value);
});