window.onload = function() {
   let start=  'ok';
   let secnd= 'ok2' ;
localStorage.setItem('start', start);
localStorage.setItem('user', 'secnd');
let x = localStorage.getItem('user');
 document.querySelector("#chek").innerHTML = x



}
