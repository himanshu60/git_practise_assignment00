---->>>CheckPrime----->>>

function CheckPrime(number){
let factorial=0;
for(i=1; i<=number; i++){
if(number%i==0){
   factorial++;
}
}
if(factorial==2){
return true;
}
return false;
}
let ans=checkPrime(13);
if(ans==true){
console.log("Number is prime");
}else{
console.log("Number is not prime");
}
