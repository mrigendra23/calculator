let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
 string = eval(string);
 document.querySelector('input').value = string;
    } 
 else if(e.target.innerHTML == 'RESET'){
 string = ""
 document.querySelector('input').value = string;
    }
 else if (e.target.innerHTML =='X'){
    string += "*"
 document.querySelector('input').value = string;
 }
else if(e.target.innerHTML == 'DEL'){
 string = string.substring(0, string.length-1)
 document.querySelector('input').value = string;
 }
    else{ 
 console.log(e.target)
string += e.target.innerHTML;
document.querySelector('input').value = string; }
  })
})

