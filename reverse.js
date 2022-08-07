function reverseString(text){
    // for ( let i = 0; i < text.length; i++){}
    let reverse= '';
    for ( let i = text.length-1; i >= 0; i--){
        const element=text[i];
        reverse = reverse + element;
        console.log(element, reverse);
    }
    return reverse;
}

const myString='I am a good boy';
const reversed=reverseString(myString);
console.log('reversed outpt:',reversed);