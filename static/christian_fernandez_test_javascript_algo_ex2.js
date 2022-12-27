//Asking for an array of 9 numbers
function F21(A) {

    var A = new Array(9);
    while (A.length == 9 && true) {                                           //Loop to add only numbers and diferent to each other

        let input = prompt('Enter numbers for the array');
        if (input == "1" || input == "2" || input == "3" || input == "4" || input == "5" || input == "6" || input == "7" || input == "8" || input == "9") {
            if (input == input) {
                return false;
            } else {
                A.push(Number(input));
                return true;
            }
        } else {
            return false;
        }

    }
return true;


} 