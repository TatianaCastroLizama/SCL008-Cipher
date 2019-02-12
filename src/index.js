window.onload = () => {
  const botonEncode = document.getElementById('encode');
  const casa = document.getElementById('home');
  const instrucciones = document.getElementById('instruction');
  const casacodifi = document.getElementById('homeEncode');
  const casaDecode = document.getElementById("decoForm")


  botonEncode.addEventListener('click', () => {
    casa.style.display = "none";
    casaDecode.style.display = "none;"
    instrucciones.style.display = "block";
    casacodifi.style.display = "block";
  });


  const botonDecode = document.getElementById('decode');

  botonDecode.addEventListener('click', () => {
    casa.style.display = "none";
    casacodifi.style.display = "none";
    instrucciones.style.display = "block";
    casaDecode.style.display = "block";
  });

  const botonVolver = document.getElementById('backHome');
  botonVolver.addEventListener('click', () => {
    casa.style.display = "block";
    instrucciones.style.display = "none";
    casaDecode.style.display = "none";
    casacodifi.style.display = "none";
  });


  const button_enter = document.getElementById('goEncode');
  


  button_enter.addEventListener('click', () => {

    let encodvr = document.getElementById('text').value;
    let offsetEncode = document.getElementById('offset').value;
    let resultEncode = window.cipher.encode(offsetEncode, encodvr);

    document.getElementById("contenedor_datos").innerHTML = (resultEncode);

    
    const button_enterTwo = document.getElementById('button_enterTwo');
   

    button_enterTwo.addEventListener('click', () => {
      let decovr = document.getElementById('textTwo');
      let numbSecur = document.getElementById('offsetTwo');
      let resultDeco = window.cipher.decode(numbSecur, decovr);

      document.getElementById("contenedor_datos_deco").innerHTML = (resultDeco);

    })

  })
}