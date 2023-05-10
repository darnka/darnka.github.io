function koltseg_szamitas() {
    let ar = 360;
    let nm = document.querySelector("input[name='darab-szam']");
    let beirt_nm = parseInt(nm.value);
    fizetendo(ar, beirt_nm);
}

function fizetendo(ar, beirt_nm){
  
  let kk_osszesen = document.querySelector("span.fizetendo-osszesen");
  if (beirt_nm > 75) {
      alert("A házban nincs 75 négyzetméternél nagyobb alapterületű ingatlan!");
  }else if (beirt_nm < 27) {
      alert ("A házban nincs 27 négyzetméternél kisebb alapterületű ingatlan!");
  }else {
      let k_koltseg = beirt_nm * ar;
      kk_osszesen.innerHTML = k_koltseg;
  }  
}


