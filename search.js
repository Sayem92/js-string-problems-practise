const lyrics='tumi bondo kala pakhi, ami jeno ki .bosonto kale tumay bolte pari ni. kala kala sada sada rong jomece vala';

const seachstring='boSonto'
// const doesExit= lyrics.includes('bosonto');
// const doesExit= lyrics.includes('Bosonto');
// const doesExit= lyrics.includes(seachstring);

// 2 ta k lower case kora
const seachstringlower=seachstring.toLowerCase();
const lyricslower=lyrics.toLowerCase();
 const doesExit=lyricslower.includes(seachstringlower);



// ak sate ak line a lowercase
const oneLineLower=lyrics.toLowerCase().includes(seachstring.toLowerCase());


// console.log(doesExit);
// console.log(oneLineLower);




// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// index of koto number a ace
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sadada') !== -1){
    console.log('exits inside the string');
}
else{
    console.log('cannot find it')
}


// string ar potom a ki ace chek
console.log(lyrics.startsWith('tumi'));

// string endwith kuja
const file='my pic.png';
const otherfile=' my pdf';
console.log(otherfile.endsWith('pdf.'));