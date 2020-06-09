
//--------------------------------------------------------------------------
// A valid passwd contains at least 8 characters, one number,
// une upper and one lower case letter
//--------------------------------------------------------------------------
function CheckPassword(inputtxt) {
    var decimal = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

    if (inputtxt.value.match(decimal)) {
        alert('Correct input')
        return true;
    }
    else {
        alert('Wrong...Passwd field must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"!')
        return false;
    }
} 
//--------------------------------------------------------------------------
//This function verifies if the destination name is long enough and if start date is prior to end date.
//--------------------------------------------------------------------------

function checkEnteredDestAndDates(dest,stdateval,endateval){
    if(dest.length<3) {
        alert("Destination must be at least 3 characters long");
        return false;
    }
   
    
     if(endateval == null || stdateval== null){
        alert('Please fill in the date field')
        return false;
    }

    var datediffval = (endateval - stdateval)/864e5;
    if(datediffval < 0){
        alert("Start date must be prior to end date");
        return false;
    }
    return true;
    
}
