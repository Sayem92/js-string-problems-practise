
function maxInArray(number){
    let lowest=number[0];
for (let i=0; i< number.length; i++){
    const index= i;
    const element = number[index];
    if( element < lowest){
        lowest = element;
    }
}
return lowest;

}

const weigth=[167, 190, 120, 165, 137, 5582]
const lowest=maxInArray(weigth);
console.log('tallest person is:',lowest);
