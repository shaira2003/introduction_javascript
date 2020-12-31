let age=prompt("whats your age?")
function checkAge(age){
    if(age>=18){
        return true
    }

else{
    return false
    }
}
if(checkAge(age)){
    console.log("eligible to vote")
}
else{
    console.log("not eligible to vote")
}
