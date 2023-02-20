var precio_base = 2000

var edad_18 = 0.1
var edad_25 = 0.2
var edad_50 = 0.3

var casado_18 = 0.1
var casado_25 = 0.2
var casado_50 = 0.3

var hijos_recargo = 0.2


//Recargo
var recargo = 0
var recargo_total = 0
var recargo_cas = 0
var recargo_hijos = 0
var recargo_c = 0
var recargo_h = 0
var hijos_recargo = 0.2
var recargo_hijos = 0
var recargo_p = 0

var rect = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

if (edad <18)
   { alert ("Lo lamentamos, debe de ser mayor de edad"); }
  

var casado = prompt("¿Está casado actualmente?")
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos?")
var cant_hijos
if("SI" == hijos.toUpperCase()){
  cant_hijos = prompt("¿Cuantos hijos tiene?")
}
var hijos_numero = parseInt(cant_hijos)

var cant_hijos_numer = 0

if("SI" == hijos.toUpperCase()){
  cant_hijos_numer = parseInt(cant_hijos)
  }

if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18
  recargo_total = recargo_total + recargo
}
  
  if(edad_numero>=25 && edad_numero<49){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
  }
  
   if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}
else if (edad_conyuge_numero>=18 && edad_conyuge_numero<24){
  recargo_cas = precio_base * casado_18
    recargo_c = recargo_c + recargo_cas
  }

else if (edad_conyuge_numero>=25 && edad_conyuge_numero<49){
  recargo_cas = precio_base * casado_25
  recargo_c = recargo_c + recargo_cas
  }
else if (edad_conyuge_numero>=50){
  recargo_cas = precio_base * casado_50
  recargo_c = recargo_c + recargo_cas
  }


else if (hijos_numero<=1){
  recargo_hijos = precio_base * hijos_recargo
  recargo_h = recargo_hijos + recargo_h
  
  
  }

 if (cant_hijos_numer>=1 )
 {
  recargo_hijos = precio_base * hijos_recargo
  recargo_p = recargo_hijos * cant_hijos_numer
  recargo_h = recargo_p + recargo_h
  
  }
precio_final = precio_base + recargo_c + recargo_total + recargo_h
rect = recargo_c + recargo_total + recargo_h
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+rect)
alert ("El precio sera de: "+precio_final)

