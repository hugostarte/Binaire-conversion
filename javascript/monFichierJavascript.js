var abonnements = function() {
	document.getElementById('verifier').addEventListener("click",verifier);
	document.getElementById('calculer').addEventListener("click",calculer);
}
window.addEventListener("load",abonnements);

var verifier = function(){
	var entree = document.getElementById('entree').value;
	var resultat = document.getElementById('resultat');
	if(entree == ""){
		resultat.innerHTML = "<span id='resultatFaux'>Veuillez saisir une valeur !</span>";
	}
	var k = 0;
	while(k == 0 ){
		for (var i=0; i < entree.length; i++){
			ASCII = entree.charCodeAt(i);
		if (ASCII == 48 || ASCII == 49  ){
		resultat.innerHTML= "<span id='resultatVrai'>Votre nombre <b>" + entree + "</b> peut être considéré comme binaire</span>"; 	}
		
		if (ASCII > 49 || ASCII < 48 ){
				resultat.innerHTML =  "<span id='resultatFaux'>Le nombre <b>" + entree +"</b> n'est pas binaire !</span>";
				k = 1; break;}
			}
	break;
	}
}

var calculer = function() {
	var entier = document.getElementById("entier").value;
	var resultat = document.getElementById("resultatBinaire");
	var reste = 0;
	var nombre = entier;
	var nombreBinaire = "";
	while (nombre > 0) {
		if (nombre % 2 != 0) {
			reste = 1;
		} else {
			reste = 0;
		}
		nombre = Math.trunc(nombre / 2);
		nombreBinaire = reste + nombreBinaire;
	}
	resultatBinaire.innerHTML = entier +" correspond à " + nombreBinaire +" en langage binaire";

	if(entier == ""){
		resultatBinaire.innerHTML = "<span id='resultatFaux'>Veuillez saisir une valeur !</span>";
	}
}