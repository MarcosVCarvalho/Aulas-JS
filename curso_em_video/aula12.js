var hj = new Date();
var diaS = hj.getDay();
switch (diaS) {
    case diaS >= 5 || diaS == 0:
        console.log(diaS)
        console.log('ja pode beber')
        break;

    default:
        console.log(diaS)
        console.log('beba com moderação')
        break;
}