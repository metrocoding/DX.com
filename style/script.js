 // fixed menu---------------------------------------------------------------------------
 window.onscroll = function() {

     if (window.pageYOffset > 740) {
         bottom.className = "fixed";
         document.getElementById("sidebar").classList.add('side');
     } else {
         bottom.className = "";
         document.getElementById("sidebar").classList.remove('side');
     }
 }


 side8.onclick = function() {
     window.scrollTo(0, 0);
 }
 side2.onclick = function() {
     window.scrollTo(0, 1750);
 }
 side3.onclick = function() {
     window.scrollTo(0, 2370);
 }
 side4.onclick = function() {
     window.scrollTo(0, 2985);
 }
 side5.onclick = function() {
     window.scrollTo(0, 3600);
 }

 // minitriple -----------------------------------------------------------------------------

 posi1 = 0
 setInterval("autogo()", 6000);

 function autogo() {
     if (posi1 > -200) {
         posi1 = posi1 - 100;
         gallery5.style.left = posi1 + "%";
     } else if (posi1 == -200) {
         posi1 = 0;
         gallery5.style.left = posi1 + "%";
     }
 }



 // sliderMain-------------------------------------------------------------------------
 pos = 0


 function move(i) {
     pos = i * -100;
     gal.style.left = i * -100 + "%";

 }

 setInterval("go_right()", 4000);

 function go_right() {

     if (pos > -700) {
         pos = pos - 100;

         gal.style.left = pos + "%";
     } else if (pos == -700) {
         pos = 0;
         gal.style.left = pos + "%";
     }
 }



 // miniVertical1-------------------------------------------------------------------------
 pos1 = 0

 rightt.onclick = function() {
     if (pos1 > -100) {
         pos1 = pos1 - 100;
         gallery.style.left = pos1 + "%";
     } else if (pos1 == -100) {
         pos1 = 0;
         gallery.style.left = pos1 + "%";
     }
 }

 leftt.onclick = function() {
         if (pos1 < 0) {
             pos1 = pos1 + 100;
             gallery.style.left = pos1 + "%";
         } else if (pos1 == 0) {
             pos1 = -100;
             gallery.style.left = pos1 + "%";
         }
     }
     // miniVertical2-------------------------------------------------------------------------
 pos2 = 0

 right2.onclick = function() {
     if (pos2 > -100) {
         pos2 = pos2 - 100;
         gallery2.style.left = pos2 + "%";
     } else if (pos2 == -100) {
         pos2 = 0;
         gallery2.style.left = pos2 + "%";
     }
 }

 left2.onclick = function() {
     if (pos2 < 0) {
         pos2 = pos2 + 100;
         gallery2.style.left = pos2 + "%";
     } else if (pos2 == 0) {
         pos2 = -100;
         gallery2.style.left = pos2 + "%";
     }
 }

 //miniHorizontal1---------------------------------------------------------------------------
 pos3 = 0

 right3.onclick = function() {
     if (pos3 > -200) {
         pos3 = pos3 - 100;
         gallery3.style.left = pos3 + "%";
     } else if (pos3 == -200) {
         pos3 = 0;
         gallery3.style.left = pos3 + "%";
     }
 }

 left3.onclick = function() {
         if (pos3 < 0) {
             pos3 = pos3 + 100;
             gallery3.style.left = pos3 + "%";
         } else if (pos3 == 0) {
             pos3 = -200;
             gallery3.style.left = pos3 + "%";
         }
     }
     //miniHorizontal2---------------------------------------------------------------------------
 pos4 = 0

 right4.onclick = function() {
     if (pos4 > -200) {
         pos4 = pos4 - 100;
         gallery4.style.left = pos4 + "%";
     } else if (pos4 == -200) {
         pos4 = 0;
         gallery4.style.left = pos4 + "%";
     }
 }

 left4.onclick = function() {
     if (pos4 < 0) {
         pos4 = pos4 + 100;
         gallery4.style.left = pos4 + "%";
     } else if (pos4 == 0) {
         pos4 = -200;
         gallery4.style.left = pos4 + "%";
     }
 }

 //big1------------------------------------------------------------------

 makan = 0


 rast.onclick = gorast;

 setInterval("gorast()", 2800);

 function gorast() {
     if (makan > -600) {
         makan = makan - 100;
         galkete.style.left = makan + "%";
     } else if (makan == -600) {
         makan = 0;
         galkete.style.left = makan + "%";
     }
 }

 chap.onclick = function() {
     if (makan < 0) {
         makan = makan + 100;
         galkete.style.left = makan + "%";
     } else if (makan == 0) {
         makan = -600;
         galkete.style.left = makan + "%";
     }
 }

 p1.onclick = function() {
     makan = 0;
     galkete.style.left = 0 + "%";
 }

 p2.onclick = function() {
     makan = -100;
     galkete.style.left = makan + "%";
 }

 p3.onclick = function() {
     makan = -200;
     galkete.style.left = makan + "%";
 }

 p4.onclick = function() {
     makan = -300;
     galkete.style.left = makan + "%";
 }

 p5.onclick = function() {
     makan = -400;
     galkete.style.left = makan + "%";
 }

 p6.onclick = function() {
     makan = -500;
     galkete.style.left = makan + "%";
 }

 p7.onclick = function() {
     makan = -600;
     galkete.style.left = makan + "%";
 }


 //big2------------------------------------------------------------------



 makan2 = 0


 rast2.onclick = boro_rast2;

 setInterval("boro_rast2()", 3400);

 function boro_rast2() {
     if (makan2 > -400) {
         makan2 = makan2 - 100;
         galkete2.style.left = makan2 + "%";
     } else if (makan2 == -400) {
         makan2 = 0;
         galkete2.style.left = makan2 + "%";
     }
 }

 chap2.onclick = function() {
     if (makan2 < 0) {
         makan2 = makan2 + 100;
         galkete2.style.left = makan2 + "%";
     } else if (makan2 == 0) {
         makan2 = -400;
         galkete2.style.left = makan2 + "%";
     }
 }

 v1.onclick = function() {
     makan2 = 0;
     galkete2.style.left = 0 + "%";
 }

 v2.onclick = function() {
     makan2 = -100;
     galkete2.style.left = makan2 + "%";
 }

 v3.onclick = function() {
     makan2 = -200;
     galkete2.style.left = makan2 + "%";
 }

 v4.onclick = function() {
     makan2 = -300;
     galkete2.style.left = makan2 + "%";
 }

 v5.onclick = function() {
     makan2 = -400;
     galkete2.style.left = makan2 + "%";
 }


 //big3------------------------------------------------------------------


 makan3 = 0


 rast3.onclick = boro_rast3;

 setInterval("boro_rast3()", 3100);

 function boro_rast3() {
     if (makan3 > -400) {
         makan3 = makan3 - 100;
         galkete3.style.left = makan3 + "%";
     } else if (makan3 == -400) {
         makan3 = 0;
         galkete3.style.left = makan3 + "%";
     }
 }

 chap3.onclick = function() {
     if (makan3 < 0) {
         makan3 = makan3 + 100;
         galkete3.style.left = makan3 + "%";
     } else if (makan3 == 0) {
         makan3 = -400;
         galkete3.style.left = makan3 + "%";
     }
 }

 w1.onclick = function() {
     makan3 = 0;
     galkete3.style.left = 0 + "%";
 }

 w2.onclick = function() {
     makan3 = -100;
     galkete3.style.left = makan3 + "%";
 }

 w3.onclick = function() {
     makan3 = -200;
     galkete3.style.left = makan3 + "%";
 }

 w4.onclick = function() {
     makan3 = -300;
     galkete3.style.left = makan3 + "%";
 }

 w5.onclick = function() {
     makan3 = -400;
     galkete3.style.left = makan3 + "%";
 }

 //big4------------------------------------------------------------------


 makan4 = 0


 rast4.onclick = boro_rast4;

 setInterval("boro_rast4()", 3600);

 function boro_rast4() {
     if (makan4 > -400) {
         makan4 = makan4 - 100;
         galkete4.style.left = makan4 + "%";
     } else if (makan4 == -400) {
         makan4 = 0;
         galkete4.style.left = makan4 + "%";
     }
 }

 chap4.onclick = function() {
     if (makan4 < 0) {
         makan4 = makan4 + 100;
         galkete4.style.left = makan4 + "%";
     } else if (makan4 == 0) {
         makan4 = -400;
         galkete4.style.left = makan4 + "%";
     }
 }

 q1.onclick = function() {
     makan4 = 0;
     galkete4.style.left = 0 + "%";
 }

 q2.onclick = function() {
     makan4 = -100;
     galkete4.style.left = makan4 + "%";
 }

 q3.onclick = function() {
     makan4 = -200;
     galkete4.style.left = makan4 + "%";
 }

 q4.onclick = function() {
     makan4 = -300;
     galkete4.style.left = makan4 + "%";
 }

 q5.onclick = function() {
     makan4 = -400;
     galkete4.style.left = makan4 + "%";
 }


 //=====Last-tabswitch=============================================================================================   

 t1.onclick = function() {
     seller.style.display = "none";
     under.style.display = "none";
     t1.style.color = "#f66907";
     t2.style.color = "#585858";
     t3.style.color = "#585858";

 }

 t2.onclick = function() {
     seller.style.display = "block";
     under.style.display = "none";
     t1.style.color = "#585858";
     t2.style.color = "#f66907";
     t3.style.color = "#585858";
 }
 t3.onclick = function() {
     seller.style.display = "none";
     under.style.display = "block";
     t1.style.color = "#585858";
     t2.style.color = "#585858";
     t3.style.color = "#f66907";
 }

 t4.onclick = function() {
     hili.style.display = "none";
     voi.style.display = "none";
     t4.style.color = "#f66907";
     t5.style.color = "#585858";
     t6.style.color = "#585858";

 }

 t5.onclick = function() {
     hili.style.display = "block";
     voi.style.display = "none";
     t4.style.color = "#585858";
     t5.style.color = "#f66907";
     t6.style.color = "#585858";
 }
 t6.onclick = function() {
     hili.style.display = "none";
     voi.style.display = "block";
     t4.style.color = "#585858";
     t5.style.color = "#585858";
     t6.style.color = "#f66907";
 }