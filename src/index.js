module.exports = function toReadable(number) {
    function numberArr(numberToSplit) {
        return numberToSplit.toString().split("");
    }
    //let number = 123;
    let arrNumber = numberArr(number);
    console.log(arrNumber)
    let readNumber;

    if (arrNumber.length === 3) {
        if (arrNumber[1].toString() == '1') {
            readNumber = thrityNumber(arrNumber[0].toString()) + tenNumber(arrNumber[2].toString());
            console.log(readNumber);

            return readNumber.replace(/ +/g, ' ').trim();
        }
        readNumber = thrityNumber(arrNumber[0].toString()) + secondNumber(arrNumber[1].toString()) + convertNumber(arrNumber[2].toString());
        console.log(readNumber);

        return readNumber.replace(/ +/g, ' ').trim();;
    }
    if (arrNumber.length === 2) {

        if (arrNumber[0].toString() == '1') {
            readNumber = tenNumber(arrNumber[1].toString());
            console.log(readNumber);

            return readNumber.replace(/ +/g, ' ').trim();
        }
        readNumber = secondNumber(arrNumber[0].toString()) + convertNumber(arrNumber[1].toString());
        console.log(readNumber);
        return readNumber.replace(/ +/g, ' ').trim();

    }
    if (!number) {
        return 'zero';
    }
    readNumber = convertNumber(arrNumber[0].toString());
    console.log(readNumber);
    return readNumber.replace(/ +/g, ' ').trim();;


    function convertNumber(lNumber) {
        switch (lNumber) {
            case '0':
                return '';
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
            case '10':
                return 'ten';
        }
    }
    function secondNumber(lNumber) {
        switch (lNumber) {
            case '0':
                return '';
            case '2':
                return 'twenty ';
            case '3':
                return 'thirty ';
            case '4':
                return 'forty ';
            case '5':
                return 'fifty ';
            case '6':
                return 'sixty ';
            case '7':
                return 'seventy ';
            case '8':
                return 'eighty ';
            case '9':
                return 'ninety ';
        }
    }
    function thrityNumber(lNumber) {
        switch (lNumber) {
            case '0':
                return '';
            case '1':
                return 'one hundred ';
            case '2':
                return 'two hundred ';
            case '3':
                return 'three hundred ';
            case '4':
                return 'four hundred ';
            case '5':
                return 'five hundred ';
            case '6':
                return 'six hundred ';
            case '7':
                return 'seven hundred ';
            case '8':
                return 'eight hundred ';
            case '9':
                return 'nine hundred ';
        }
    }
    function tenNumber(lNumber) {
        switch (lNumber) {
            case '0':
                return 'ten';
            case '1':
                return 'eleven ';
            case '2':
                return 'twelve ';
            case '3':
                return 'thirteen ';
            case '4':
                return 'fourteen ';
            case '5':
                return 'fifteen ';
            case '6':
                return 'sixteen ';
            case '7':
                return 'seventeen ';
            case '8':
                return 'eighteen ';
            case '9':
                return 'nineteen ';
        }
    }
}
