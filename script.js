$(document).ready(function () {
    // Tableau des choix a faire
    const choice = ['Pierre', 'Feuille', 'Ciseau'];

    // Creation d'un joueur intelligent
    const playerIA = {
        name: 'Ordinateur',

        // fonction qui regle les choix du joueur
        choixIA: function () {
            let c = Math.floor(Math.random() * choice.length);

            return choice[c];
        }
    }
    // console.log(`${playerIA.name} joue : ${playerIA.choixIA()}`);

    // Score des joueur
    // Utilisateur
    let countU = 0;
    // IA
    let countI = 0;

    $('#gagnant').hide();
    $('#perdant').hide();

    const submit = $('#submit');
    submit.on('click', function () {
        $('#choixUti h5').html($('#choix').val());
        $('#choixIa h5').html(`${playerIA.choixIA()}`);
        playerIA.choixIA();
        if ($('#choixUti h5').html() === $('#choixIa h5').html()) {
            alert('Match Null');
            setTimeout(function(){
                $('#choixUti h5').html('Autre choix');
                $('#choixIa h5').html('Autre choix');
            }, 1000);
        } else if (
            $('#choixUti h5').html() === 'Pierre' && $('#choixIa h5').html() === 'Ciseau' ||
            $('#choixUti h5').html() === 'Feuille' && $('#choixIa h5').html() === 'Pierre' ||
            $('#choixUti h5').html() === 'Ciseau' && $('#choixIa h5').html() === 'Feuille'
        ) {
            alert('Felicitation.\nVous avez gagné.');
            countU++;
            $('#scoreU').text(countU);
            setTimeout(function(){
                $('#choixUti h5').html('Autre choix');
                $('#choixIa h5').html('Autre choix');
            }, 1000);
        } else if (
            $('#choixUti h5').html() === 'Pierre' && $('#choixIa h5').html() === 'Feuille' ||
            $('#choixUti h5').html() === 'Feuille' && $('#choixIa h5').html() === 'Ciseau' ||
            $('#choixUti h5').html() === 'Ciseau' && $('#choixIa h5').html() === 'Pierre'
        ) {
            alert('Dommage.\nVous avez perdu.');
            countI++;
            $('#scoreI').text(countI);
            setTimeout(function(){
                $('#choixUti h5').html('Autre choix');
                $('#choixIa h5').html('Autre choix');
            }, 1000);
        } else {
            alert('perdu')
        }

        // Vérification des scores pour déterminer un gagnant final
        if (countU === 5) {
            $('#gagnant').show();
            // $('body').hide(); // Cache tout sauf le message gagnant
        } else if (countI === 5) {
            $('#perdant').show();
            // $('body').hide(); // Cache tout sauf le message perdant
        }
    })

    // Bouton recommencer
    $('.recom').on('click', function () {
        window.location.reload(); // Recharge la page pour recommencer le jeu
    });
})