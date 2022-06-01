/************************************** */
//REVERSING A NUMBER
/************************************** */

let num = 744 , rev = 0 , rem = 0;

while(num > 0){
    rem = num % 10 ;
    rev = (rev * 10 ) + rem ;
     num = Math.floor(num / 10)
   
}

 console.log(rev);




