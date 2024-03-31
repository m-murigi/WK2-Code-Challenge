   
    
let string ="The Quick Brown Fox";

//'tHE qUICK bROWN fOX'
function swapCase(string) {
    const words = string.split('  ');

    return words.map(word => {
        return word[0].toLowerCase() + word.slice(1).toUpperCase();
    }).join(" ");
}

const swappedString = swapCase(string);
console.log(swappedString);