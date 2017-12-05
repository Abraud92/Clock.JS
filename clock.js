function tick()
   with(new Date()){
     var h, m, s;
     h = 30 * (getHours() % 12 + getMinutes()/ 60);
     m = 6 * getMinutes();
     s = 6 * getSeconds ();
     document.getElementById('s').style.transform = "rotate("+s+"deg)";
     document.getElementById('m').style.transform="-webkit-transfor"
     transform:rotate("+m+"deg);
     document.getElementById('h').style.transform="-webkit-transfor"
     transform:rotate("+h+"deg);
   setTimeout(tick, 1000);
   }
