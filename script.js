
input = document.querySelector(".input");
output = document.querySelector(".output");
shift = document.querySelector(".shift")
btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    caesarCipher(input.value, Number(shift.value))
} )



function caesarCipher(text, shift){

   text = text.split("").map(elm =>   elm.charCodeAt());
   
   text.forEach((elm, i) => {
    shiftedElm = elm + shift;
    console.log(shiftedElm)

    // symbols preservation
    if ((elm > 122 || elm < 97) && (elm > 90 || elm < 65)){

        text[i] = elm
    }
   
//    lower case char
    else if((shiftedElm >= 97 && shiftedElm <= 122 && elm >= 97 && elm <= 122 ) ) {
        text[i] = shiftedElm
        console.log("checke lower case")
        }
        // upper case char
    else if (shiftedElm >= 65 && shiftedElm <= 90 && elm >= 65 && elm <= 90){
        text[i] = shiftedElm
        console.log("checke upper case")

    }

    // lower case wrapping
    else if(shiftedElm > 122 ){
        
        text[i] = (shiftedElm - 122) + 96
        console.log("checke lower case wrap")
       
    }
     //  upper case wrapping
     else if(shiftedElm > 90 ){
        
        text[i] = (shiftedElm - 90) + 64
        console.log("checke upper case wrap")
    }
   
   
   });

   
   
   text = text.map(elm => String.fromCharCode(elm));


output.textContent = text.join("")
}





// "a" = 97
// "z" = 122
// "A".charCodeAt() = 65
// "Z".charCodeAt() = 90




