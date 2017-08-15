function main(a){
    let result ='';
    for(let i = a;i >= 0;i--){
        if(i === 0){
            result += `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        }else if(i == 1){
            result += `${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, no more bottles of beer on the wall.
`;
        }else{
            result +=`${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.
`
        }
    }
    return result;
}
module.exports = main;
