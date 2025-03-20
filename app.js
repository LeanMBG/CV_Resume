//Menu lateral
var menu_visible = false;

let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si el menu esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let TSQL = document.getElementById("TSQL");
crearBarra(TSQL);
let Python = document.getElementById("Python");
crearBarra(Python);
let MySql = document.getElementById("MySQL");
crearBarra(MySql);
let PowBi = document.getElementById("PowBi");
crearBarra(Power Bi);
let Tableau = document.getElementById("Tableau");
crearBarra(Tableau);
let Debug = document.getElementById("Debug");
crearBarra(Debug);

//Gaurdo la cantidad de items que se van a ir pintando por cada barra
//comienzan en -1 porque no tiene ninguna pintada al iniciarse, los arrays arrancan en 0
let contadores = [-1,-1,-1,-1,-1,-1];
//inicio variable bandera en falso para q se active en scroll
let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalTSQL = setInterval(function(){
            pintarBarra(TSQL, 16, 0, intervalTSQL);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(Python, 11, 1, intervalPython);
        },100);
        const intervalMySql = setInterval(function(){
            pintarBarra(MySql, 15, 2, intervalMySql);
        },100);
        const intervalPOWBI = setInterval(function(){
            pintarBarra(POWBI, 14, 3, intervalPOWBI);
        },100);
        const intervalTableau = setInterval(function(){
            pintarBarra(Tableau, 15, 4, intervalTableau);
        },100);
        const intervalDebug = setInterval(function(){
            pintarBarra(Debug, 16, 5, intervalDebug);
        },100);
    }
}

//lleno una barra
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
