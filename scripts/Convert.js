const ConvertTemp = (tempFrom,tempTo,tempInput) => {
    if(tempFrom == "celcius") {
        if (tempTo == "celcius") {
            return tempInput;
        }
        if (tempTo == "reamur") {
            return (4 / 5) * tempInput;
        }
        if (tempTo == "fahrenheit") {
            return (9 / 5) * tempInput + 32;
        }
    }
    if(tempFrom == "reamur") {
        if (tempTo == "reamur") {
            return tempInput;
        }
        if (tempTo == "celcius") {
            return (5 / 4) * tempInput;
        }
        if (tempTo == "fahrenheit") {
            return (9 / 4) * tempInput + 32;
        }
    }
    if(tempFrom == "fahrenheit") {
        if (tempTo == "fahrenheit") {
            return tempInput;
        }
        if (tempTo == "celcius") {
            return (5 / 9) * (tempInput - 32);
        }
        if (tempTo == "reamur") {
            return (4 / 9) * (tempInput - 32);
        }
    }
  }
  
  module.exports = ConvertTemp;