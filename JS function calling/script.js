const isAdult = function(age) {
    if(age >= 18){
        return true;
    } else {
    return false;
    }
}

const sendMessage = function(age){
    if(isAdult(age) == true){
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(sendMessage(29));
console.log(sendMessage(9));

// VAT calculations
const calculateTotalPrice = function(basePrice, vatPercentage){
    return basePrice + (basePrice * (vatPercentage / 100));
}

const calculateVat = function(basePrice, vatPercentage){
    const totalPrice = calculateTotalPrice(basePrice, vatPercentage);
    return totalPrice - basePrice;
}

console.log(calculateTotalPrice(200, 9));
console.log(calculateVat(200, 9));

// VAT exercise 2

const calculateBasePrice = function(totalPrice, vatPercentage){
    const basePrice = totalPrice / (vatPercentage / 100 + 1);
    return basePrice;
}
//console.log(calculateBasePrice(121, 21));

const calculateBaseAndVat = function(totalPrice, vatPercentage){
    const basePrice = calculateBasePrice(totalPrice, vatPercentage);
    const vatPrice = totalPrice - basePrice;
    return [basePrice, vatPrice];
}

//console.log(calculateBaseAndVat(121, 21));


