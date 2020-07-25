
import React from 'react';
import {View,Text} from  'react-native';

// let ve const , const bir kere oluşturulur
class Furkan extends React.Component{
    render(){ //görüntüyü oluşturma fonksiyonu
        const boyut = 10;
        const satirlar = [];

        for(let i=0;i<=boyut;i++){
          satirlar[i] = '';

          for(let j=0; j<= boyut-i;j++) satirlar[i] += '-';
          for(let j=0; j<= 2*i; j++) satirlar[i] += '*' 

          satirlar.forEach(s => console.log(s));
          satirlar.reverse().forEach(s => console.log(s))
        }
       
     
        return <Text>Furkan</Text>;
    }
}

export default Furkan;




/*
kosul ? olumlu:olumsuz; üçlü şart

for (let i=0;i<20;i++){
  console.log(i);
}

for (let i=0;i<dizi1.length;i++){
  const eleman = dizi1[i];

  console.log(eleman);
}

const fonk = (e) => {console.log(e)}

dizi1.forEach(fonk);

fonksiyon = (x) =>{} arrow function

foreach(dizi,fonksiyon){
  for(let i=0;i< dizi.length;fonksiyon(dizi[i++]));
}


 const dizi1 = ['furkan',25,true,0.3];
      const dizi2 = [];
      

    const dizi3 = [dizi1,'*****',dizi2,[1,2,3]];
      //dizi2.push('fdkfjkdsjf'); //eleman ekleme
      //const birleşmişdizi = dizi1.concat(dizi2);
    return  <Text>{dizi3[0].sort()}</Text>;
    // <Text>{dizi1.concat(dizi2)}</Text>; dizi1 e dizi2 yi ekler sonuç döndürür

*/