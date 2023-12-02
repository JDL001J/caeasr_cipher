
input = document.querySelector(".input");
output = document.querySelector(".output");
shift = document.querySelector(".shift")
btn = document.querySelector(".btn")
shiftInput = document.querySelector('.shift');

shiftInput.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        caesarCipher(input.value, Number(shift.value))
    }
    
})

btn.addEventListener("click", function(){
    caesarCipher(input.value, Number(shift.value))
} )

input.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        caesarCipher(input.value, Number(shift.value))
    }
    
})

function caesarCipher(text, shift){

   text = text.split("").map(elm =>   elm.charCodeAt());
   
   text.forEach((elm, i) => {
    shiftedElm = elm + shift;
    

    // symbols preservation
    if ((elm > 122 || elm < 97) && (elm > 90 || elm < 65)){

        text[i] = elm
    }
   
//    lower case char
    else if((shiftedElm >= 97 && shiftedElm <= 122 && elm >= 97 && elm <= 122 ) ) {
        text[i] = shiftedElm
        
        }
        // upper case char
    else if (shiftedElm >= 65 && shiftedElm <= 90 && elm >= 65 && elm <= 90){
        text[i] = shiftedElm
      

    }

    // lower case wrapping
    else if(shiftedElm > 122 ){
        
        text[i] = (shiftedElm - 122) + 96
        
       
    }
     //  upper case wrapping
     else if(shiftedElm > 90 ){
        
        text[i] = (shiftedElm - 90) + 64
        
    }
   
   
   });

   
   
   text = text.map(elm => String.fromCharCode(elm));


output.value =  text.join("");


}












let text = document.getElementById('myText');
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text.value);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }