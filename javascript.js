 document.getElementById("p1").style.fontSize = "1.5rem";
 document.getElementById("p2").style.fontSize = "1.5rem";
 document.getElementById("p3").style.fontSize = "1.5rem";
 document.getElementById("p4").style.fontSize = "1.5rem";
 document.getElementById("p5").style.fontSize = "1.5rem";
 document.getElementById("m1").width = "300";
 document.getElementById("m2").width = "300";
 document.getElementById("m3").width = "300";
 document.getElementById("m4").width = "300";
 document.getElementById("p1").innerHTML = "Domaće životinje su one životinje koje čovjek pripitomljava i uzgaja radi koristi i razonode, a koje i same imaju koristi od takve trajne zajednice sa čovjekom jer su zaštićene u borbi za opstanak.Da bi se neka životinja smatrala domaćom, potrebno je ispuniti tri uvjeta. Prvi je uvjet da životinja posjeduje osobine koje su čovjeku korisne,drugi da je privržena i poslušna čovjeku i treći da se jedinke redovito razmnožavaju pod čovjekovim nadzorom";
 document.getElementById("p2").innerHTML = "Magarac kakvog danas poznamo potječe od divljih predaka iz Afrike, nubijskog i somalijskog divljeg magarca. Nubijski divlji   magarac potječe s područja Sjeverne Afrike (današnje Eritreje), a somalijski divlji magarac s juga Eritreje i sjeverne Somalije. Magarac je udomaćen prije osam tisuća godina. U trećem tisućljeću pr.Kr. magarci se šire Azijom, a ratovi i trgovina, posebno ‹›put svile››, dovode magarce i na područje Europe, najvjerovatnije prije tri do četiri tisuće godina prije kris";
 document.getElementById("p3").innerHTML = " Domaćim govedom, često jednostavno samo govedom, nazivaju se domesticirani potomci divljeg goveda (Bos taurus). Domesticiranje je počelo prvo radi mesa, a kasnije radi mlijeka i njihove snage korištene za vuču. ";
 document.getElementById("p5").onmouseover = function() {mouseOver()};
 document.getElementById("p5").onmouseout = function() {mouseOut()};
 
 function mouseOver() {
   document.getElementById("p5").innerHTML="Domaći konj (konj, lat. Equus (Equus) caballus; sin. Equus ferus caballus, Equus caballus caballus, Equus caballus) je veliki četveronožni sisavac, pripadnik roda Equus. Konji su odavno bili jedna od najvažnijih domaćih životinja  koja se uzgaja u vrlo velikom broju raznih pasmina, a živi širom svijeta.";
 }
 var audio = document.getElementById("audio");
 var img = document.getElementById("m4");
 
 document.addEventListener("click", function(e){
    if( e.target === img ){
      audio.src = "zvukkonja.mp3";
      audio.play();
    }
    else{
     audio.src = "zvukkonja2.mp3";
     audio.play();
   }
 },false);
