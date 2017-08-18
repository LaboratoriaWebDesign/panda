
var imagenes = ["assets/img/a1.jpg","assets/img/a2.jpg","assets/img/a3.jpg","assets/img/a4.jpg"];
for (var i =0; i<imagenes.length; i++) {
	var imgpanda = document.getElementById("img_panda");
	var imagencita = document.createElement("img");
	imagencita.setAttribute("class", "picture");
	imagencita.setAttribute("src",imagenes[i]);
	imgpanda.appendChild(imagencita);

	var boton = document.createElement("button")
	boton.setAttribute("class","btnPicture");
	boton.addEventListener("click",presionarX);
	botonX = document.createTextNode('X');	
	boton.appendChild(botonX);
	imgpanda.appendChild(boton);

	var imgdiv = document.createElement("div");//creamos un contenedor para cada imagen creada y boton
	imgdiv.setAttribute("class","imgDivBtn");
	imgdiv.appendChild(imagencita);//ponemos a la imagen dentro del div pequeño que creamos
	imgdiv.appendChild(boton);
	imgpanda.appendChild(imgdiv);//metemos al imgpanda que es el padre el hijo imgdiv
}

function presionarX(event){
	console.log("padre X"+this.parentNode);
	var elemnto=this.parentNode;
	elemnto.style.display='none';
}

var texto = document.getElementById("texto2");
var origen = document.getElementById("origen");
origen.addEventListener("click",presionarOrigen);
function presionarOrigen(){
	alert("origen");
	if(texto.style.display == 'block')
	{
		texto.style.display = 'none';
	}
	else
		texto.style.display = 'block';
	
} 
var extincion = document.getElementById("extincion");
extincion.addEventListener("click",presionarExtencion );
function presionarExtencion(){
	alert("extencion");
	//texto.style.display='none';
	if(texto.style.display == 'none')
	{
		texto.style.display = 'block';
	}
	else
		texto.style.display = 'none';

}
var restaurar = document.getElementById("restaurar");
restaurar.addEventListener("click", presionarRestaurar);
function presionarRestaurar(event){
	alert("restaurar");
	var res = document.getElementsByClassName("imgDivBtn");
	for (var i = 0; i <res.length; i++) {
		res[i].style.display='inline-block';
		//imgdiv.style.display='inline-block';
	}
}

