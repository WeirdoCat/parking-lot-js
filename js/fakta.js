var SYSTEM = 'fakta';

var desc = "Her i føtex er vi faktisk de bedste af de bedste, DA DET ER HELT GRATIS AT PARKERE.      *kun de første 5 minutter herefter 20 kr pr påbegyndte kvarter"

faktaprice = function (checkoutTime, checkinTime) {
    delay = 5;
    quarterprice = 20;
    // Det koster 20 kr pr pågebyndt kvarter (15s) hos fakta, men de første 5 minutter er gratis
    const time = ((checkoutTime - checkinTime) / 1000) - delay;

    if (time < 0) {
        return 0;
    } else {
        return quarterprice * (Math.floor(time / 15) + 1);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(faktaprice, desc));
});