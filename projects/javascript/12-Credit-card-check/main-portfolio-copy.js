// ----- Starter code -----

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// ----- My own code -----

/* Created a function that takes in credit card numbers and 
    returns true if number is valid and false if invalid.

    Based off the Luhn algorithm, a series of mathematical calculations 
    used to assess the validity of certain identification numbers such as credit card numbers.
    "https://en.wikipedia.org/wiki/Luhn_algorithm#Description"

    This function will;
    -Work from the far right to the far left digit
    -Double every other digit except the first. If the number is greater than 9 
        after doubling, subtract 9 from its value
    -Now sum all digits in the credit card number
    -If the sum divided by 10 has a remainder of 0, the number is valid, else its invalid. */

const validateCred = array => {
    const arrayCopy = array.slice();
    for (let i = arrayCopy.length-2; i >= 0; i -= 2) {
        arrayCopy[i] = arrayCopy[i] * 2;
        if (arrayCopy[i] > 9) {
            arrayCopy[i] = arrayCopy[i] - 9    
        }
    }
    const sumArray = arrayCopy.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    if (sumArray % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

/* Created a function which takes in a nested array of numerous credit cards 
and returns a new array of invalid credit card numbers. */

const findInvalidCards = cardsArray => {
    const invalidCards = [];
    cardsArray.forEach(card => {
        if (validateCred(card) === false) {
            invalidCards.push(card);
        };
    })
    return invalidCards;
}

/* Identify the credit card companies that issued  faulty credit card numbers.
    Identify the company based on the first digit of each credit card.
    Return an array of companies which issued faulty numbers, ensuring each company is only listed once. */

const idInvalidCompanies = invalidArray => {
    const companyArray = [];
    invalidArray.forEach(element => {
        switch (element[0]) {
            case 3:
                companyArray.push('Amex (American Express)');
                console.log(companyArray);
                break;
            case 4:
                companyArray.push('Visa');
                console.log(companyArray);
                break;
            case 5:
                companyArray.push('Mastercard');
                console.log(companyArray);
                break;
            case 6:
                companyArray.push('Discover');
                console.log(companyArray);
                break;
            default:
                console.log(`${element} + Company not found`);
        }
    })
    const uniquecompanyArray = [...new Set(companyArray)];
    return uniquecompanyArray;
}

console.log(idInvalidCompanies(findInvalidCards(batch)));

