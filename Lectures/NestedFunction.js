//Outer function can access inner function variables but inner function variables can not access outer function variables
function mainfunction(){
    console.log("Vansh");
    function innerfunction()
    {
        console.log("Gupta");
    }
    innerfunction();
}
mainfunction();