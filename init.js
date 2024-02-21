export function szamolando(szam){
    let oszthatoKettovel = false;
    // if (szam % 2 === 0){
    //      oszthatoKettovel = true;
    // }

    //TERNÁLIS OPERÁTOR
    szam % 2 == 0 ? oszthatoKettovel=true : oszthatoKettovel=false;

    return oszthatoKettovel;
}