"use strict";
let str = `
010-4038-4244
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

//const regexp = new RegExp('the', 'gi');
const regexp = /the/g;
//console.log(regexp.test(str));
//str = str.replace(regexp, 'yeol');
console.log(str.match(/\bf\w{1,}\b/g));

const h = `  the heloow word    !

`;
console.log(h.replace(/\s/g, ''));

const test2 = `
010-4038-4244
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

console.log(test2.match(/.{1,}(?=@)/g));
console.log(test2.match(/(?<=@).{1,}/g));