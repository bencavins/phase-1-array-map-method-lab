//split
// 'what does the this keyword mean?'
// ['what', 'does', 'the', 'this'...]

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

// function titleCased() {}

const titleCased = () => {

  // map over all titles in the array
  return tutorials.map((title) => {

    // turn the title into an array of word (no spaces)
    const words = title.split(' ')

    // map over the array of words
    const capWords = words.map((word) => {

      // capitalize the first letter of the word, leave the rest the same
      return word[0].toUpperCase() + word.substring(1)
    })

    // turn the array of capitalized words into a string (with spaces)
    return capWords.join(' ')
  })
}

console.log(titleCased())
