function gewinner() {
  event.preventDefault();
  const alt1 = document.getElementById("alt1").value;
  const alt2 = document.getElementById("alt2").value;
  const alt3 = document.getElementById("alt3").value;
  const alt4 = document.getElementById("alt4").value;
  const groß1 = document.getElementById("groß1").value;
  const groß2 = document.getElementById("groß2").value;
  const groß3 = document.getElementById("groß3").value;
  const groß4 = document.getElementById("groß4").value;
  const spieler1 = parseInt(alt1) - 5 + parseInt(groß1);
  const spieler2 = parseInt(alt2) - 5 + parseInt(groß2);
  const spieler3 = parseInt(alt3) - 5 + parseInt(groß3);
  const spieler4 = parseInt(alt4) - 5 + parseInt(groß4);
  const ergebniss = document.getElementById("ergebniss");

  if ((spieler1 > spieler2) & (spieler1 > spieler3) & (spieler1 > spieler4)) {
    ergebniss.innerHTML =
      "Der Gewinner ist " + document.getElementById("name1").value;
  } else if (
    (spieler2 > spieler1) &
    (spieler2 > spieler3) &
    (spieler2 > spieler4)
  ) {
    ergebniss.innerHTML =
      "Der Gewinner ist " + document.getElementById("name2").value;
  } else if (
    (spieler3 > spieler2) &
    (spieler3 > spieler1) &
    (spieler3 > spieler4)
  ) {
    ergebniss.innerHTML =
      "Der Gewinner ist " + document.getElementById("name3").value;
  } else {
    ergebniss.innerHTML =
      "Der Gewinner ist " + document.getElementById("name4").value;
  }
  document.getElementById("sp1").innerHTML = spieler1;
  document.getElementById("sp2").innerHTML = spieler2;
  document.getElementById("sp3").innerHTML = spieler3;
  document.getElementById("sp4").innerHTML = spieler4;
}
