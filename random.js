let userinput = document.getElementById('userinput');

let button = document.getElementById('button');

let answer = document.getElementById('answer');




function dec(){
    var randomnr = Math.floor(Math.random() * 10+1);
if(userinput.value == randomnr){
    answer.innerHTML =  randomnr +'<br> correct';
   
      } 
      else{
        answer.innerHTML =  randomnr + '<br> wrong';
      
          }
      
      
     

}

