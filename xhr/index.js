function main() {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "https://slowfil.es/file?type=js&delay=200", false);
  oReq.send();
  if (oReq.status === 200) {
    console.log(oReq.responseText);
  }
}

main();
