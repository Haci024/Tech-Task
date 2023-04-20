function transformString(input) {
    return input.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
    
}
console.log(transformString('ab')); //'A-Bb'
console.log(transformString('abc')); //'A-Bb-Ccc'
console.log(transformString('dkjb')); //'D-Kk-Jjj-Bbbb'