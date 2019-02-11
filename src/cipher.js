window.cipher = {
  encode: (offset, text) => {

    let textAsciiEncode  = '';


  for (let i = 0; i < text.length; i++) {
    let textAscii = text.charCodeAt(i);

    if(textAscii >= 65 && textAscii <=90){
      textAscii = ((textAscii - 65 + parseInt(offset)))%26 + 65;

    }
textAsciiEncode += String.fromCharCode(textAscii);
  }
  
  return textAsciiEncode;
},


  decode: (offset,text) => {

    let textDeco = '';
    let textAscii = texts.charCodeAt (i);

    for (let i = 0; i < text.length; i++){

      if(textAscii >= 65 && textAscii <=90){
        textAscii = (( textAscii - 90 - parseInt (offset))) % 26 + 90;

      }

      textDeco += String.fromCharCode(textAscii);
    }
    return textDeco;
  }
};
