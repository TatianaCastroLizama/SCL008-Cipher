window.cipher = {
    encode: (offset, encodvr) => {
  
      let textAsciiEncode  = '    ';
  
  
    for (let i = 0; i < encodvr.length; i++) {
      let textAscii = encodvr.charCodeAt(i);
  
      if(textAscii >= 65 && textAscii <=90){
        textAscii = ((textAscii - 65 + parseInt(offset)))%26 + 65;
  
      }
  textAsciiEncode += String.fromCharCode(textAscii);
    }
    
    return textAsciiEncode;
  },
  
  
    decode: (numbSecur,decovr) => {
  
      let textDeco = '';
      let textAscii = decovr.charCodeAt (i);
  
      for (let i = 0; i < decovr.length; i++){
  
        if(textAscii >= 65 && textAscii <=90){
          textAscii = (( textAscii - 90 - parseInt (offset))) % 26 + 90;
  
        }
  
        textDeco += String.fromCharCode(textAscii);
      }
      return textDeco;
    }
  };