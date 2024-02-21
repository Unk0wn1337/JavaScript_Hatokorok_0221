import { szamolando } from "./init.js";

//console.log(szamolando(5));

// var, let , const - hatókörök

//console.log(szam); //szam ->  hibaüzenet - nem fut tovább, míg nincs incializálva
// var szam = 12;
let szam = 12;

function fv1(){
    let szam = 5;
    console.log(szam);
    let masikszam = 23;
    console.log(masikszam);
    
}
//console.log(masikszam); // hibaüzenet - reference error
//console.log(szam);
//fv1();
function fv2(){
    var x = 2;
    {
        var x = 3
        console.log(x)
    }
    console.log(x)
}
//fv2();

function fv3(){
    for (let index = 0; index < 3; index++) {
        console.log(index)
        
    }
    console.log(index)
}

fv3();


function fv4(szam){
    // ternális operátor  oldd meg!
    // függvény adja a vissza 3-mal való osztáis maradékot szövegesen
    let szoveg;
    szam % 3 === 0 ? (szoveg = "nulla") : szam % 3 === 1  ? (szoveg = "egy") : (szoveg = "kettő"); 
    

    // szöveg változó értéke nulla, egy, ketto
    return szoveg;

}