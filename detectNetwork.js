// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

	if(cardNumber.length === 14 && (/^38|^39/.test(cardNumber))){
		return "Diner's Club";

	}else if(cardNumber.length === 15 && (/^34|^37/.test(cardNumber))){
		return "American Express";

	}else if(cardNumber.length === 16 && (/^51|^52|^53|^54|^55/.test(cardNumber))) {
		return "MasterCard";

  }else if((cardNumber.length === 16 || cardNumber.length === 19) && (/^65|^6011|^644|^645|^646|^647|^648|^649/.test(cardNumber))){
        return "Discover"; 

  }else if((cardNumber.length >=12 && cardNumber.length <= 19) && (/^5018|^5020|^5038|^6304/.test(cardNumber))){
        return "Maestro"; 

  }else if((cardNumber.length >= 16 && cardNumber.length <= 19) && (/^62/.test(cardNumber))) {
    return "China UnionPay";

  }else if((cardNumber.length === 13 ||cardNumber.length === 16 || cardNumber.length === 18 ||cardNumber.length === 19 )) {
      var type = checkCardType(cardNumber);
      if(type ==='Switch'){
        return "Switch";
      }else if(type ==='Visa'){
        return "Visa";
      }

  }else {
         return "Invalid Card";   
  }
};

//following function is to check Visa and Switch Card Types
function checkCardType(numberString) {
  var switchPrefixArrayFour =['4903','4905','4911','4936','6333','6759'];
  var switchPrefixArraySix=['564182','633110'];
  if(numberString.length === 13 && (/^4/.test(numberString))){
    return "Visa";
  }

  if(numberString.length === 18){
    if(switchPrefixArrayFour.find((prefix) =>(prefix === numberString.substring(0,4)))) {
      return "Switch";
    }

    if(switchPrefixArraySix.find((prefix) =>(prefix === numberString.substring(0,6)))) {
      return "Switch";
    }
  }

  if(numberString.length === 16 || numberString.length === 19){
    if(switchPrefixArrayFour.find((prefix) =>(prefix === numberString.substring(0,4)))) {
      return "Switch";
    }

    if(switchPrefixArraySix.find((prefix) =>(prefix === numberString.substring(0,6)))) {
      return "Switch";
    }

    if((/^4/.test(numberString))){
      return "Visa";
    }

  }
}


