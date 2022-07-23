var screens =document.getElementsByClassName('screen');
let scrn='';
var buttons=document.querySelectorAll('button');
var op=document.getElementsByClassName('operator');
for(item of buttons){
item.addEventListener('click',(e)=>
  {buttonText= e.target.innerText;
if(buttonText == '='){
  // scrn += buttonText;
   try{console.log(scrn);
   screens[0].innerText = eval(scrn);
   scrn=eval(scrn);}
   catch{
    screens[0].innerText= 'ERROR!';
    scrn='';
   }
  }
else if(buttonText == 'X'){
  buttonText = '*';
  scrn+=buttonText;
  screens[0].innerText=scrn;
}
else if(buttonText == 'C'){
  scrn='';
  screens[0].innerText=scrn;
}
else if(buttonText =='<-'){
  screens[0].innerText = scrn.slice(0,-1);
}
else{
   scrn+=buttonText;
   screens[0].innerText = scrn;
  }
   })};