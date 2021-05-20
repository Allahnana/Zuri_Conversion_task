
function convert(fahr){
    let cels = 0;
   if(isNaN(fahr)){
         if(Array.isArray(fahr)){
                 return `[${fahr}] the number is not valid but an array`
             }
      else if((typeof fahr)  == 'object'){
                 return `${JSON.stringify(fahr)} the number is not but a/an ${typeof fahr}`
             } else {
                 return `${fahr} the number is not valid but a/an ${typeof fahr}`
             }
   } else {
     cels = (fahr - 32) * 5/9;
         return cels.toFixed(2);
   }
 }


