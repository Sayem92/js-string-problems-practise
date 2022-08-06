const lyrics='tumi bondo kala pakhi, ami jeno ki .bosonto kale tumay bolte pari ni. kala kala sada sada rong jomece vala.';

const parts= lyrics.split(' ');
const sentence= lyrics.split('.')
const word= lyrics.split('')
// console.log(word);

const partial= lyrics.slice(2,8);
// console.log(partial)


const partial2= lyrics.substring(2,8);
// console.log(partial2)


const add= [
    'Tumi bondo kala pakhi, ami jeno ki ',
    'Bosonto kale tumay bolte pari ni',
    ' Kala kala sada sada rong jomece vala']
    const addoneline=add.join('.  ');
    console.log(addoneline)