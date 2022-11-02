
let edadParaComprobar = + prompt ("¿Que edad tienes?");

if (!(edadParaComprobar >=18  && edadParaComprobar <=99)) {//&& entra cuando las dos true

    alert("No esta entre 18 y 19");
}

if (edadParaComprobar <18 || edadParaComprobar >99) {//entra cuando una  es true
    
    alert("No esta entre 18 y 19");
}