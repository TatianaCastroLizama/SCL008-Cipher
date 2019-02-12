window.cipher = {
    encode: (offsetEncode, encodvr) => {
  
      let textAsciiEncode  = '    ';
  
  
    for (let i = 0; i < encodvr.length; i++) {
      let textAscii = encodvr.charCodeAt(i);
  
      if(textAscii >= 65 && textAscii <=90){
        textAscii = ((textAscii - 65 + parseInt(offsetEncode)))%26 + 65;
  
      }
  textAsciiEncode += String.fromCharCode(textAscii);
    }
    
    return textAsciiEncode;
  },
  
  
    decode: (numbSecur, decovr) => {
  
      let textDeco = '';
     
  
      for (let i = 0; i < decovr.length; i++){
        let textAscii = decovr.charCodeAt (i);
  
        if(textAscii >= 65 && textAscii <=90){
          textAscii = (( textAscii - 90 - parseInt (numbSecur))) % 26 + 90;
  
        }
  
        textDeco += String.fromCharCode(textAscii);
      }
      return textDeco;
    }
  };