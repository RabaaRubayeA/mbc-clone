let i=1;

let bigImage=document.querySelector('#toto');
    // setInterval(changeImage, 3000);
   

function changeImage(){
    bigImage.style.transition='transform 0.4s ease-in-out'
    bigImage.src='./images/hero-image'+i+'.png';
    console.log('this is '+i);

    i++;  
if (i===6){
    i=1;
}
     
}
function changeImagel(){
    console.log('this is '+i);
}