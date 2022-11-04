const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title => {
    let words = splitWords(title);
    let capitalizedWords = words.map(word => {
      let firstCharacter = isolateFirstCharacter(word).toUpperCase();
      return `${firstCharacter}${word.substring(1)}`;
    })
    return capitalizedWords.join(' ');
  })
}



function splitWords(title){
  return title.split(" ");
}

function isolateFirstCharacter(word){
  return word[0];
}