const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  let cap_titles = tutorials.map((title) => {
    let title_array = title.split(" ");
    let cap_array = title_array.map((title_word) => {
      return title_word.charAt(0).toUpperCase() + title_word.slice(1);
    });

    return cap_array.join(" ");
  });
  return cap_titles;
};

//1. Iterate through all the array using .map to get all the titles (done)
//2. split up those titles into words using .split()
//3. iterate through the new array using forEach
//4. for every first letter, call .toUpperCase();
//5. return new array
