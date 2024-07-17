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
  return tutorials.map(sentence => titleCaseSentence(sentence));
}

const sampleMap = tutorials.map(line => line.toUpperCase() )

function splitSentence(sentence){
  return sentence.split(" ");
}

function makeTitleCaseWord(someWord){
  //let's take 'superman'
  const firstLetter = someWord[0].toUpperCase();
  return firstLetter + someWord.slice(1)
}

function buildSentence(wordList){
  return wordList.join(" ")
}

function titleCaseSentence(sentence){
  const sentenceArray = splitSentence(sentence);
  const titleCasedArray = sentenceArray.map(word => makeTitleCaseWord(word))
  const finalSentence = buildSentence(titleCasedArray);
  return finalSentence
}
