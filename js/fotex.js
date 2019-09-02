var SYSTEM = 'føtex';

var desc = "her i føtes vil vi gerne have at du bliver så lang tid som du har lyst derfor betaler du kun 15kr pr 15 minutter du parkerer."

fotexprice = function(checkoutTime,checkinTime) {
    delay = 0;
    quarterprice = 15;
    // Det koster 15 kr pr pågebyndt kvarter (15s) hos føtex
    const time = ((checkoutTime - checkinTime) / 1000) - delay;

    if (time < 0) {
        return 0;
    } else {
        return quarterprice * (Math.floor(time / 15) + 1);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(fotexprice, desc));
});