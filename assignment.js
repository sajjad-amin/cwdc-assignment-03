
// https://github.com/sajjad-amin/cwdc-assignment-03

function kilometerToMeter(kilometer){
    if (typeof kilometer != "number") {
        console.log("input must be number");
    } else if (kilometer < 0) {
        console.log("distance cannot be negative");
    } else {
        return kilometer * 1000;
    }
}

function budgetCalculator(watchAmount, mobileAmount, laptopAmount){
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    if (typeof watchAmount != "number" || typeof mobileAmount != "number" || typeof laptopAmount != "number") {
        console.log("you must enter three parameter, and they shuld be number");
    } else if (watchAmount < 0 || mobileAmount < 0 || laptopAmount < 0) {
        console.log("every input must be positive");
    } else {
        return (watchAmount*watchPrice) + (mobileAmount*mobilePrice) + (laptopAmount*laptopPrice);
    }
}

function hotelCost(days){
    /*first ten dey cost 100 taka each day
    second ten dey cost 80 taka each day
    rest of the dey cost 50 taka each day*/
    var totalCost = 0;
    if (typeof days != "number") {
        console.log("input must be number");
    } else if (days < 0){
        console.log("input cannot be negative");
    } else if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstTenDayCost = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDayCost = remainingDays * 80;
        totalCost = firstTenDayCost + secondTenDayCost;
    } else {
        var firstTenDayCost = 10 * 100;
        var secondTenDayCost = 10 * 80;
        var remainingDays = days - 20;
        var restDaysCost = remainingDays * 50;
        totalCost = firstTenDayCost + secondTenDayCost + restDaysCost;
    }
    return totalCost;
}

function megaFriend(friends){
    var megaFriendName = "";
    if (typeof friends != "object" || friends.length < 2) {
        console.log("You must provide an array, and array shud contain at least two item");
    } else {
        for (var i = 0; i < friends.length; i++) {
            if (typeof friends[i] == "string") {
                if (megaFriendName.length < friends[i].length) {
                    megaFriendName = friends[i];
                }
            }
            else {
                console.log("array can be contain only string");
                return;
            }
        }
    }
    return megaFriendName;
}