
  
   
    function rotarImagenes()
    {
    	var index=Math.floor((Math.random()*4));
       if(index==0){
        document.getElementById("imagen").src="img/foto1.jpg";
       }
        if(index==1){
        document.getElementById("imagen").src="img/foto2.jpg";
        }
        if(index==2){
        document.getElementById("imagen").src="img/foto3.jpg";
        }
        if(index==3){
        document.getElementById("imagen").src="img/foto4.jpg";
        }
        
    }
 
 
    function inicio()
    {
       
        setInterval(rotarImagenes,5000);
    }
window.onload=inicio;
 