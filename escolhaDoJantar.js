/*let comida = "macarrao";

if (comida == "arroz") {
    console.log ("Vamos jantar " + comida);
} else if (comida == "macarrão" || comida == "macarrao") {
    console.log ("Vamos jantar " + comida);
} else if (comida == "hamburger"){
    console.log ("Vamos jantar " + comida);
} else {
    console.log ("Não temos essa opção para o jantar");
} 

console.log ("fim do programa");*/

let comida = "macarrão";

switch (comida) {
    case "arroz":
        console.log ("Vamos jantar " + comida)
        break;
    case "macarrão":
        console.log("Vamos jantar " + comida)
        break;
    case "hamburguer":
        console.log("Vamos jantar " + comida)
        break;
    default:
        console.log("Não temos esta opção para o jantar.")
        break;
}