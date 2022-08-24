/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

export const pigIt = (words : string) : string =>  {
  let result: string[] = [];
  for(let word of words.split(' ')) {
    const firstLetter = word.charAt(0);
    if(firstLetter.match(/\w/)) result.push(word.slice(1) + firstLetter + 'ay');
    else result.push(word);
  }  
  return result.join(' ');  
}
