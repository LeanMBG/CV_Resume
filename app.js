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

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let SQL = document.getElementById("SQL");
crearBarra(SQL);
let VB6 = document.getElementById("VB6");
crearBarra(VB6);
let NodeJS = document.getElementById("NodeJS");
crearBarra(NodeJS);
let scrum = document.getElementById("scrum");
crearBarra(scrum);

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
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalSQL = setInterval(function(){
            pintarBarra(SQL, 16, 2, intervalSQL);
        },100);
        const intervalVB6 = setInterval(function(){
            pintarBarra(VB6, 13, 3, intervalVB6);
        },100);
        const intervalNodeJS = setInterval(function(){
            pintarBarra(NodeJS, 16, 4, intervalNodeJS);
        },100);
        const intervalScrum = setInterval(function(){
            pintarBarra(scrum, 11, 5, intervalScrum);
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
